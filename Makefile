# System Setup
SHELL = bash

APP := $(shell basename $(PWD) | tr '[:upper:]' '[:lower:]')

BASE_URL ?= http://localhost:8001
ANIMATIONS ?= true
GIT_SHORT_COMMIT_HASH := $(shell git rev-parse --short HEAD)

GH_URL := 'https://api.github.com'
TR_URL := 'https://api.travis-ci.com'

NO_COLOR := \033[0m
INFO_COLOR := \033[0;36m

.PHONY: all
all: run

.PHONY: build
build: clean ## Build the project
	GH_URL=$(GH_URL) \
	TR_URL=$(TR_URL) \
	npx webpack -p

.PHONY: clean
clean: ## Cleanup all running and generated items
	-@rm -rf errorShots
	-@rm -rf junit
	-@rm -rf serverLogs
	-@rm -rf dist
	-@rm -f *-debug.log *-error.log

.PHONY: dev
dev: ## Run the dev test server
	GH_URL=$(GH_URL) \
	TR_URL=$(TR_URL) \
	npx webpack-dev-server --port 8080 --hot --progress

.PHONY: help
help:  ## Show This Help
	@for line in $$(cat Makefile | grep "##" | grep -v "grep" | sed  "s/:.*##/:/g" | sed "s/\ /!/g"); do verb=$$(echo $$line | cut -d ":" -f 1); desc=$$(echo $$line | cut -d ":" -f 2 | sed "s/!/\ /g"); printf "%-30s--%s\n" "$$verb" "$$desc"; done

.PHONY: install
install: ## Install dependencies
	npm install

.PHONY: linters
linters: ## Run all linters
	npx eslint src/ ./*.js --ext .js

.PHONY: test
test: unit_test integration_test selenium_test ## Run all tests

.PHONY: unit_test
unit_test: ## Run all unit tests
	npx jest --config=jest.unit.config.js

.PHONY: story
story: ## Run storybook
	npx start-storybook -p 9001 -c .storybook
