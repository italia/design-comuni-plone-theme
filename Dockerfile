FROM node:16-bullseye-slim as base

FROM base as build

WORKDIR /home/node/app
USER root

ENV BUILD_DEPS="make"

RUN apt-get update && \
    apt-get install -y --no-install-recommends $BUILD_DEPS

COPY . .

RUN --mount=type=cache,target=/root/.yarn \
    YARN_CACHE_FOLDER=/root/.yarn yarn --immutable && \
    YARN_CACHE_FOLDER=/root/.yarn yarn build && \
    rm -rf /home/node/.cache && \
    apt-get purge -y $BUILD_DEPS && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

FROM base

WORKDIR /home/node/app
COPY --chown=node --from=build /home/node/app/build /home/node/app/build/
COPY --chown=node --from=build /home/node/app/node_modules /home/node/app/node_modules/

EXPOSE 3000 3001 4000 4001
CMD ["node", "build/server.js"]

