init:
	npm i

start:
	docker-compose up -d

migrate: start
	npm run database:migrate
	npm run database:seed