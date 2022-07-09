install:
	npm install

lint:
	npx stylelint ./app/sass/**/*.scss

deploy:
	npx surge ./src/

b:
	npx gulp build