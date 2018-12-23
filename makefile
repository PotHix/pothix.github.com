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
	@make build
	@echo "Publishing"
	@git log --oneline | head -n1 | sed -r 's/^[a-zA-Z0-9]+ //g' > public/last_commit
	@git checkout master
	@git pull
	@rm -rf *.html *.xml 2* about* blog stats now post categories coding speaking writing media loja tags page stylesheets images avatar javascripts talks
	@mv public/* .
	@git add -A .
	@git commit -m "Last commit from source branch: '`cat last_commit`'"
	@rm -rf public last_commit
	@git push
	@git checkout -

drafts:
	@egrep "draft.*true" * -rl | grep "\.md"
