publish:
	@bundle exec middleman build
	@git checkout master
	@rm -rf 2* categories tags page stylesheets
	@mv build/* .
	@rm -rf build
	@git add -A .
	@git commit -m "New version"
	@git push
	@git checkout source
