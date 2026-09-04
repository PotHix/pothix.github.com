# zola version: 0.23
rebuild:
	@echo "Cleaning up"
	@rm -rf public/*
	@make build

run:
	@zola serve --drafts

build:
	@echo "Building"
	@zola build

# Files that live on main only and must survive a publish
KEEP := ':(exclude)CNAME' ':(exclude).nojekyll' ':(exclude).gitignore' ':(exclude)README.markdown'

publish:
	@make rebuild
	@echo "Publishing"
	@msg="$$(git log -1 --format=%s)"; \
	git checkout main || exit 1; \
	{ \
		git pull --rebase && \
		git rm -r -q -f --ignore-unmatch -- . $(KEEP) && \
		cp -R public/. . && \
		git add -A . && \
		if git diff --cached --quiet; then \
			echo "Nothing to publish"; \
		else \
			git commit -q -m "Last commit from source branch: '$$msg'" && git push; \
		fi; \
	}; \
	status=$$?; \
	git checkout -; \
	exit $$status

drafts:
	@egrep "draft.*true" content/posts/ -rl | grep "\.md"

# The vault is the source of truth. Notes there use plain [Foo](foo.md)
# links so Obsidian can resolve them; Zola needs its own @/ form, which
# would resolve against /places/<slug>/ and 404 if left as a bare path.
# Links already written as @/... are skipped by the pattern.
#
# Images need the same treatment in the other direction: the vault keeps
# attachments flat in Assets/ and refers to them relatively, while the site
# wants /images/<section>/<file>. fix-vault-image-paths.py restores the
# section by looking each basename up under static/images, and exits
# non-zero if it finds one it cannot place. Where one basename exists in
# two sections it compares the vault copy byte-for-byte to pick, because
# code/ and coding/ hold different images under the same names.
VAULT      := $(HOME)/obsidian/second-brain
FIX_IMAGES := ./scripts/fix-vault-image-paths.py $(CURDIR) $(VAULT)/Assets
places:
	@echo "Syncing places from Obsidian"
	@cp ~/obsidian/second-brain/NotHix/Places/*.md content/places/
	@rm -f content/places/_readme.md
	@sed -i '' -E 's|\]\(([a-z0-9-]+)\.md\)|](@/places/\1.md)|g' content/places/*.md
	@$(FIX_IMAGES) content/places/*.md

notes: places
	@cp ~/obsidian/second-brain/NotHix/pothix.com/pages/*.md content/pages/
	@$(FIX_IMAGES) content/pages/*.md




