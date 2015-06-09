build:
	@bundle exec middleman build

publish:
	@git checkout master
	@rm -rf 2* categories tags page stylesheets images
	@mv build/* .
	@rm -rf build
	@git add -A .
	@git commit -m "New version"
	@git push
	@git checkout source
