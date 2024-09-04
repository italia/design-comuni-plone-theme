# syntax=docker/dockerfile:1
ARG VOLTO_VERSION
FROM plone/frontend-builder:${VOLTO_VERSION} as builder

ARG ADDON_NAME
ARG ADDON_PATH

ENV NODE_OPTIONS "--max_old_space_size=4096"

USER root

RUN <<EOT
    set -e
    apt update
    apt install -y --no-install-recommends ca-certificates git-core libvips-dev
    rm -rf /var/lib/apt/lists/*
EOT

USER node

COPY --chown=node:node ./ /app/src/addons/${ADDON_PATH}/
COPY --chown=node:node dockerfiles/helper.js /app/

RUN <<EOT
    set -e
    /setupAddon
    node helper.js
    rm -rf public
    cp -a /app/src/addons/${ADDON_PATH}/public .
    yarn install --network-timeout 1000000
    yarn dedupe @popperjs/core
    yarn build
    rm -rf cache omelette .yarn/cache
EOT

FROM plone/frontend-prod-config:${VOLTO_VERSION}

LABEL maintainer="RedTurtle" \
      org.label-schema.name="design-comuni-plone-theme" \
      org.label-schema.description="Plone theme for Italian Public Administration" \
      org.label-schema.vendor="RedTurtle"

COPY --from=builder /app/ /app/
