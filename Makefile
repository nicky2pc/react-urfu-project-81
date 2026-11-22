install:
	npm ci

build:
	npm run build

lint:
	npm run lint

format:
	npm run format

typecheck:
	npm run typecheck

test:
	npm test

test-coverage:
	npm run test-coverage

.PHONY: install build lint format typecheck test test-coverage
