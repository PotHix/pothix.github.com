build:
	@bundle exec middleman build

publish:
	@git checkout master
	@git pull
	@rm -rf 2* categories tags page stylesheets images javascripts
	@mv build/* .
	@rm -rf build
	@git add -A .
	@git commit -m "New version"
	@git push
	@git checkout source
