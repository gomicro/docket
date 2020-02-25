# System Setup
SHELL = bash

APP := $(shell basename $(PWD) | tr '[:upper:]' '[:lower:]')

GH_URL := 'https://api.github.com'
TR_URL := 'https://api.travis-ci.com'

NO_COLOR := \033[0m
INFO_COLOR := \033[0;36m

.PHONY: all
all: test

.PHONY: build
build: clean ## Build the project
	GH_URL=$(GH_URL) \
	TR_URL=$(TR_URL) \
	npx webpack -p

.PHONY: clean
clean: ## Cleanup all running and generated items
	-@rm -rf dist
	-@rm -rf coverage
	-@rm -f *-debug.log *-error.log

.PHONY: deploy
deploy: ## Deploy the generated site
	firebase deploy

.PHONY: dev
dev: ## Run the dev test server
	@GH_URL=$(GH_URL) \
	TR_URL=$(TR_URL) \
	npx webpack-dev-server --port 8080 --hot --progress --host 0.0.0.0

.PHONY: help
help:  ## Show This Help
	@for line in $$(cat Makefile | grep "##" | grep -v "grep" | sed  "s/:.*##/:/g" | sed "s/\ /!/g"); do verb=$$(echo $$line | cut -d ":" -f 1); desc=$$(echo $$line | cut -d ":" -f 2 | sed "s/!/\ /g"); printf "%-30s--%s\n" "$$verb" "$$desc"; done

.PHONY: install
install: ## Install dependencies
	@npm install

.PHONY: linters
linters: ## Run all linters
	npx eslint src/**/*.js

.PHONY: story
story: ## Run storybook
	npx start-storybook -p 9001 -c .storybook

.PHONY: test
test: snapshots ## Run all tests available

.PHONY: snapshots
snapshots:  ## Run snapshot tests
	npx jest --config jest.snapshot.config.js

.PHONY: update_snapshots
update_snapshots:  ## Run snapshots to update the save state
	npx jest --config jest.snapshot.config.js -u
