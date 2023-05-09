SHELL := /bin/bash
CURRENT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))


# We like colors
# From: https://coderwall.com/p/izxssa/colored-makefile-for-golang-projects
RED=`tput setaf 1`
GREEN=`tput setaf 2`
RESET=`tput sgr0`
YELLOW=`tput setaf 3`

GIT_NAME = design-comuni-plone-theme
NAMESPACE = ""
RAZZLE_JEST_CONFIG = jest-addon.config.js

# Add the following 'help' target to your Makefile
# And add help text after each target name starting with '\#\#'
.PHONY: help
help: ## This help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: all
all: build

.PHONY: test
test: ## Run unit test suite for the addon
	@echo "$(GREEN)==> Run unit test suite for the addon$(RESET)"
	docker run -it --rm -e NAMESPACE="$(NAMESPACE)" -e DEPENDENCIES="$(DEPENDENCIES)" -e GIT_NAME="$(GIT_NAME)" -v $(shell pwd):/opt/frontend/my-volto-project/src/addons/$(GIT_NAME) plone/volto-addon-ci bash -c "RAZZLE_JEST_CONFIG=$(RAZZLE_JEST_CONFIG) yarn test src/addons/$(GIT_NAME) --watchAll"

.PHONY: cypress
cypress: ## Run unit test suite for the addon
	@echo "$(GREEN)==> Run cypress for the addon$(RESET)"
	docker run -i --rm --link plone -e NODE_ENV=production -e RAZZLE_API_PATH="http://plone:55001/plone" -e CYPRESS_BACKEND_HOST="plone" -e NAMESPACE="$(NAMESPACE)" -e DEPENDENCIES="$(DEPENDENCIES)" -e GIT_NAME="$(GIT_NAME)" -v $(shell pwd):/opt/frontend/my-volto-project/src/addons/$(GIT_NAME) plone/volto-addon-ci cypress

.PHONY: prettier
prettier: ## Run unit test suite for the addon
	@echo "$(GREEN)==> Run prettier for the addon$(RESET)"
	docker run -it --rm -e NAMESPACE="$(NAMESPACE)" -e DEPENDENCIES="$(DEPENDENCIES)" -e GIT_NAME="$(GIT_NAME)" -v $(shell pwd):/opt/frontend/my-volto-project/src/addons/$(GIT_NAME) plone/volto-addon-ci prettier

.PHONY: lint
lint: ## Run unit test suite for the addon
	@echo "$(GREEN)==> Run ESlint for the addon$(RESET)"
	docker run -it --rm -e NAMESPACE="$(NAMESPACE)" -e DEPENDENCIES="$(DEPENDENCIES)" -e GIT_NAME="$(GIT_NAME)" -v $(shell pwd):/opt/frontend/my-volto-project/src/addons/$(GIT_NAME) plone/volto-addon-ci eslint

.PHONY: stylelint
stylelint: ## Run unit test suite for the addon
	@echo "$(GREEN)==> Run stylelint for the addon$(RESET)"
	docker run -it --rm -e NAMESPACE="$(NAMESPACE)" -e DEPENDENCIES="$(DEPENDENCIES)" -e GIT_NAME="$(GIT_NAME)" -v $(shell pwd):/opt/frontend/my-volto-project/src/addons/$(GIT_NAME) plone/volto-addon-ci stylelint

.PHONY: test-acceptance-server
test-acceptance-server: ## Run test acceptance server
	docker run -it \
		--rm \
		--name=plone \
		-e ZSERVER_HOST=0.0.0.0 \
		-e ZSERVER_PORT=55001 \
		-p 55001:55001 \
		-e SITE=plone \
		-e APPLY_PROFILES=plone.app.contenttypes:plone-content,plone.restapi:default,plone.app.caching:default,design.plone.policy:default \
		-e CONFIGURE_PACKAGES=plone.app.contenttypes,plone.restapi,design.plone.policy,design.plone.contenttypes,redturtle.volto,collective.volto.dropdownmenu,collective.volto.socialsettings,collective.volto.secondarymenu,collective.volto.subsites,collective.volto.subsites,redturtle.voltoplugin.editablefooter,collective.volto.subsites,redturtle.voltoplugin.editablefooter,collective.volto.formsupport,collective.volto.subsites,redturtle.voltoplugin.editablefooter,collective.volto.formsupport,collective.volto.subfooter,collective.volto.subsites,redturtle.voltoplugin.editablefooter,collective.volto.formsupport,collective.volto.subfooter,eea.api.taxonomy,collective.volto.subsites,redturtle.voltoplugin.editablefooter,collective.volto.formsupport,collective.volto.subfooter,eea.api.taxonomy,redturtle.faq,collective.volto.subsites,redturtle.voltoplugin.editablefooter,collective.volto.formsupport,collective.volto.subfooter,eea.api.taxonomy,redturtle.faq,collective.feedback,collective.volto.subsites,redturtle.voltoplugin.editablefooter,collective.volto.formsupport,collective.volto.subfooter,eea.api.taxonomy,redturtle.faq,collective.feedback,redturtle.bandi,collective.volto.subsites,redturtle.voltoplugin.editablefooter,collective.volto.formsupport,collective.volto.subfooter,eea.api.taxonomy,redturtle.faq,collective.feedback,redturtle.bandi,collective.venue,collective.volto.subsites,redturtle.voltoplugin.editablefooter,collective.volto.formsupport,collective.volto.subfooter,eea.api.taxonomy,redturtle.faq,collective.feedback,redturtle.bandi,collective.venue,collective.z3cform.datagridfield,collective.volto.subsites,redturtle.voltoplugin.editablefooter,collective.volto.formsupport,collective.volto.subfooter,eea.api.taxonomy,redturtle.faq,collective.feedback,redturtle.bandi,collective.venue,collective.z3cform.datagridfield,collective.taxonomy,collective.volto.subsites,redturtle.voltoplugin.editablefooter,collective.volto.formsupport,collective.volto.subfooter,eea.api.taxonomy,redturtle.faq,collective.feedback,redturtle.bandi,collective.venue,collective.z3cform.datagridfield,collective.taxonomy,plone.app.caching \
		-e ADDONS='plone.app.robotframework' \
		ghcr.io/redturtle/iocomune-backend \
		./bin/robot-server plone.app.robotframework.testing.PLONE_ROBOT_TESTING

.PHONY: demo
demo: docker-compose.yml
	docker compose pull
	docker compose build
	docker compose up

.PHONY: preinstall
preinstall: ## Preinstall task, checks if missdev (mrs-developer) is present and runs it
	if [ -f $$(pwd)/mrs.developer.json ]; then make develop; fi

.PHONY: develop
develop: ## Runs missdev in the local project (mrs.developer.json should be present)
	npx -p mrs-developer missdev --config=jsconfig.json --output=addons --fetch-https

.PHONY: omelette
omelette: ## Creates the omelette folder that contains a link to the installed version of Volto (a softlink pointing to node_modules/@plone/volto)
	if [ ! -d omelette ]; then ln -sf node_modules/@plone/volto omelette; fi

.PHONY: patches
patches:
	/bin/bash patches/patchit.sh > /dev/null 2>&1 ||true
