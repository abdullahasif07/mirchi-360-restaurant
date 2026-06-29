# ------------------------------------------------------------------
#  Mirchi 360° — project commands
#  Usage: `make <target>` (run `make help` to list everything)
# ------------------------------------------------------------------

# Use bash for recipes
SHELL := /bin/bash

# Override the dev/preview port: `make dev PORT=4000`
PORT ?= 3000
HOST ?= localhost

.DEFAULT_GOAL := help

.PHONY: help install dev start build preview lint lint-fix typecheck \
        format clean clean-all reinstall check update kill-port

## help: Show this help message
help:
	@echo ""
	@echo "Mirchi 360° — available commands:"
	@echo ""
	@grep -E '^## ' $(MAKEFILE_LIST) | sed -e 's/## //' | awk -F': ' '{printf "  \033[36m%-14s\033[0m %s\n", $$1, $$2}'
	@echo ""

## install: Install dependencies (clean, reproducible via npm ci)
install:
	npm ci || npm install

## kill-port: Free PORT if a process is already listening on it
kill-port:
	@pids=$$(lsof -ti tcp:$(PORT) 2>/dev/null); \
	if [ -n "$$pids" ]; then \
		echo "Port $(PORT) in use by PID(s): $$pids — freeing it..."; \
		kill -9 $$pids 2>/dev/null || true; \
		sleep 1; \
	else \
		echo "Port $(PORT) is free."; \
	fi

## dev: Run the local dev server (frees PORT first) → http://localhost:$(PORT)
dev: kill-port
	npm run dev -- --hostname $(HOST) --port $(PORT)

## build: Create an optimized production build
build:
	npm run build

## start: Run the production server (frees PORT first; needs `make build`)
start: kill-port
	npm run start -- --hostname $(HOST) --port $(PORT)

## preview: Build then serve the production app
preview: build start

## lint: Run ESLint
lint:
	npm run lint

## lint-fix: Run ESLint and auto-fix what it can
lint-fix:
	npx eslint . --fix

## typecheck: Type-check the project without emitting files
typecheck:
	npx tsc --noEmit

## check: Run typecheck + lint + build (CI-style gate)
check: typecheck lint build

## format: Format the codebase with Prettier (if available)
format:
	npx prettier --write "**/*.{ts,tsx,css,md,json}"

## clean: Remove build output and caches
clean:
	rm -rf .next out .turbo

## clean-all: Remove build output, caches and node_modules
clean-all: clean
	rm -rf node_modules

## reinstall: Clean everything and reinstall dependencies
reinstall: clean-all install

## update: Check for outdated dependencies
update:
	npm outdated || true
