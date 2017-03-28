rebuild:
	@echo "Cleaning up"
	@rm -rf public/*
	@make build

run:
	@hugo server

build:
	@echo "Building"
	@hugo -t pothix

publish:
	@make build
	@echo "Publishing"
	@git log --oneline | head -n1 | sed -r 's/^[a-zA-Z0-9]+ //g' > public/last_commit
	@git checkout master
	@git pull
	@rm -rf 2* categories tags page stylesheets images javascripts drafts feeds
	@mv public/* .
	@git add -A .
	@git commit -m "Last commit from source branch: '`cat last_commit`'"
	@rm -rf public/* last_commit
	@git push
	@git checkout source
