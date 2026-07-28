# zola version: 0.22
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

places:
	@echo "Syncing places from Obsidian"
	@cp ~/obsidian/second-brain/NotHix/Places/*.md content/places/
	@rm -f content/places/_readme.md

notes: places
	@cp ~/obsidian/second-brain/NotHix/pothix.com/pages/*.md content/pages/




