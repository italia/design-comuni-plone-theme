FROM node:14-buster-slim as build

WORKDIR /home/node/app
USER root

COPY . .

RUN buildDeps="build-essential python-dev" && \
    runDeps="git-core openssl ca-certificates" && \
    apt-get update && \
    apt-get install -y --no-install-recommends $runDeps $buildDeps && \
    yarn policies set-version 1.19.1 && \
    RAZZLE_API_PATH=VOLTO_API_PATH RAZZLE_INTERNAL_API_PATH=VOLTO_INTERNAL_API_PATH yarn --frozen-lockfile && \
    RAZZLE_API_PATH=VOLTO_API_PATH RAZZLE_INTERNAL_API_PATH=VOLTO_INTERNAL_API_PATH yarn build && \
    rm -rf /home/node/.cache && \
    apt-get purge $buildDeps -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

FROM node:14-buster-slim

WORKDIR /home/node/app
COPY --chown=node --from=build /home/node/app /home/node/app

EXPOSE 3000 3001 4000 4001
ENTRYPOINT ["/home/node/app/entrypoint.sh"]
CMD ["yarn", "start:prod"]
