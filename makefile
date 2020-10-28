rebuild:
	@echo "Cleaning up"
	@rm -rf public/*
	@make build

run:
	@hugo server --buildDrafts --buildExpired --buildFuture --disableKinds=RSS --noTimes

build:
	@echo "Building"
	@hugo

publish:
	@make rebuild
	@echo "Publishing"
	@git log --oneline | head -n1 | sed -r 's/^[a-zA-Z0-9]+ //g' > public/last_commit
	@git checkout master
	@git pull --rebase
	@rm -rf *.html *.xml 2* about* page stylesheets images avatar javascripts resources content
	@for i in $(find . -path ./public -prune -o -name index.html); do rm -rf $(dirname $i); done
	@cp -R public/* .
	@rm -rf public
	@mv images/*-*x*.png images/apple-touch-icon.png images/site.webmanifest images/*.ico .
	@git add -A .
	@git commit -m "Last commit from source branch: '`cat last_commit`'"
	@rm -rf last_commit
	@git push
	@git checkout -

drafts:
	@egrep "draft.*true" content/posts/ -rl | grep "\.md"
