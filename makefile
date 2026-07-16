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

publish:
	@make rebuild
	@echo "Publishing"
	@COMMIT_INFO=$$(git log --oneline | head -n1 | sed -r 's/^[a-zA-Z0-9]+ //g'); \
	saved_cname=$$(test -f CNAME && cat CNAME || true); \
	saved_nojekyll=$$(test -f .nojekyll && cat .nojekyll || true); \
	git checkout main; \
	git pull --rebase; \
	rm -rf *.html *.xml 2* about* page tags series stylesheets images avatar javascripts resources content; \
	for i in $$(find . -path ./public -prune -o -name index.html -print); do rm -rf $$(dirname $$i); done; \
	cp -R public/* .; \
	rm -rf public; \
	rm -rf .gitignore .hugo_build.lock last_commit CNAME README.markdown; \
	rm -rf sass templates content config.toml .nojekyll .gitmodules; \
	[ -n "$$saved_cname" ] && echo "$$saved_cname" > CNAME; \
	[ -n "$$saved_nojekyll" ] && echo "$$saved_nojekyll" > .nojekyll; \
	git add -A .; \
	git commit -m "Last commit from source branch: '$${COMMIT_INFO}'"; \
	git push; \
	git checkout -

drafts:
	@egrep "draft.*true" content/posts/ -rl | grep "\.md"
