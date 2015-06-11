build:
	@bundle exec middleman build

publish:
	@git log --oneline | head -n1 | sed -r 's/^[a-zA-Z0-9]+ //g' > build/last_commit
	@git checkout master
	@git pull
	@rm -rf 2* categories tags page stylesheets images javascripts
	@mv build/* .
	@git add -A .
	@git commit -m "Last commit from source branch: '`cat last_commit`'"
	@rm -rf build last_commit
	@git push
	@git checkout source
