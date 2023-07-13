FROM node:18-bullseye-slim as base

FROM base as build

WORKDIR /home/node/app
USER root

#RUN buildDeps="build-essential ca-certificates git-core openssl" && \
RUN buildDeps="make" && \
    apt-get update && \
    apt-get install -y --no-install-recommends $buildDeps

ENV NODE_OPTIONS "--max_old_space_size=4096"

COPY . .

RUN --mount=type=cache,target=/root/.yarn \
    YARN_CACHE_FOLDER=/root/.yarn yarn --immutable && \
    YARN_CACHE_FOLDER=/root/.yarn yarn build && \
    rm -rf /home/node/.cache

#RUN apt-get purge $buildDeps -y && \
#    apt-get clean && \
#    rm -rf /var/lib/apt/lists/*

FROM base

WORKDIR /home/node/app
COPY --chown=node --from=build /home/node/app /home/node/app

EXPOSE 3000 3001 4000 4001
CMD ["yarn", "start:prod"]

