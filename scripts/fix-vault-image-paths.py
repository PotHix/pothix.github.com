#!/usr/bin/env python3
"""Rewrite Obsidian-style image paths into site paths, in place.

The vault is the source of truth, but it stores every attachment flat in
Assets/ so Obsidian can resolve it. The site needs /images/<section>/<file>.
The section is recovered by looking the basename up under static/images, so
adding an image to the site is enough -- this script needs no edits.

Handles both forms the vault produces:

    [alt](../../Assets/foo.png)  ->  [alt](/images/writing/foo.png)
    ![[foo.png]]                 ->  ![foo](/images/writing/foo.png)

Anything it cannot resolve is left untouched and reported on stderr, so a bad
path fails loudly at sync time instead of shipping silently.

usage: fix-vault-image-paths.py <repo-root> <vault-assets> <file>...
"""

import hashlib
import re
import sys
from pathlib import Path

IMAGE_SUFFIXES = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".avif"}

# [alt](../../Assets/foo.png "title")
MARKDOWN_IMAGE = re.compile(
    r'(?P<open>\]\()\s*(?:\.\./)+Assets/(?P<name>[^)"\s/]+)(?P<close>(?:\s+"[^"]*")?\s*\))'
)
# ![[foo.png]] or ![[foo.png|alt]]
WIKILINK_EMBED = re.compile(r"!\[\[(?P<name>[^\]\[|#/]+)(?:\|[^\]\[]*)?\]\]")


def digest(path):
    """MD5 of a file, or None if it cannot be read."""
    try:
        return hashlib.md5(path.read_bytes()).hexdigest()
    except OSError:
        return None


def index_site_images(static):
    """Map each basename under static/images to the site paths holding it."""
    sections = {}
    for path in static.rglob("*"):
        if path.is_file():
            rel = path.relative_to(static)
            sections.setdefault(path.name, []).append(f"/images/{rel.as_posix()}")
    return sections


class Rewriter:
    def __init__(self, static, assets, sections):
        self.static = static
        self.assets = assets
        self.sections = sections
        self.warnings = 0

    def warn(self, message):
        print(f"  ! {message}", file=sys.stderr)
        self.warnings += 1

    def site_path(self, name, origin):
        """The site path for an image basename, or None if it can't be placed.

        The same basename can exist in more than one section holding *different*
        images (static/images/code and static/images/coding both have
        todoist.png). The vault copy is byte-identical to whichever one it came
        from, so use it to pick. Never guess: a wrong pick silently swaps the
        image.
        """
        candidates = self.sections.get(name)
        if not candidates:
            self.warn(f"{origin}: no image named {name!r} under static/images — left as is")
            return None
        if len(candidates) == 1:
            return candidates[0]

        wanted = digest(self.assets / name)
        if wanted is None:
            self.warn(
                f"{origin}: {name!r} is in {' '.join(candidates)} and is not in "
                f"the vault to compare — left as is"
            )
            return None

        exact = [c for c in candidates if digest(self.static.parent / c.lstrip("/")) == wanted]
        if len(exact) == 1:
            return exact[0]

        matched = f"{len(exact)} of them" if exact else "none of them"
        self.warn(
            f"{origin}: {name!r} is ambiguous ({' '.join(candidates)}) and the "
            f"vault copy matches {matched} — left as is"
        )
        return None

    def rewrite(self, path):
        with path.open("r", encoding="utf-8", newline="") as handle:
            text = handle.read()

        fixed = 0

        def markdown(match):
            nonlocal fixed
            site = self.site_path(match["name"], path.name)
            if site is None:
                return match[0]
            fixed += 1
            return f"{match['open']}{site}{match['close']}"

        def wikilink(match):
            nonlocal fixed
            name = match["name"]
            if Path(name).suffix.lower() not in IMAGE_SUFFIXES:
                return match[0]
            site = self.site_path(name, path.name)
            if site is None:
                return match[0]
            fixed += 1
            return f"![{Path(name).stem}]({site})"

        text = MARKDOWN_IMAGE.sub(markdown, text)
        text = WIKILINK_EMBED.sub(wikilink, text)

        if not fixed:
            return
        with path.open("w", encoding="utf-8", newline="") as handle:
            handle.write(text)
        print(f"  fixed {fixed} image path(s) in {path.name}")


def main(argv):
    if len(argv) < 3:
        sys.exit(f"usage: {Path(sys.argv[0]).name} <repo-root> <vault-assets> <file>...")

    root, assets = Path(argv[0]), Path(argv[1])
    static = root / "static" / "images"
    for directory in (static, assets):
        if not directory.is_dir():
            sys.exit(f"error: no such directory: {directory}")

    rewriter = Rewriter(static, assets, index_site_images(static))
    for name in argv[2:]:
        rewriter.rewrite(Path(name))
    return 1 if rewriter.warnings else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
