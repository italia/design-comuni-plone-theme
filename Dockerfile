FROM node:14-buster-slim

ENV BUILD_DEPS 'python-dev'

RUN runDeps="git openssl ca-certificates" && \
    apt-get update && \
    apt-get install -y --no-install-recommends $runDeps $BUILD_DEPS && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /home/node
USER node

COPY --chown=node mrs.developer.json jsconfig.json package.json yarn.lock ./
RUN mkdir src && \
    yarn set version 1.19.1 && \
    RAZZLE_API_PATH=VOLTO_API_PATH RAZZLE_INTERNAL_API_PATH=VOLTO_INTERNAL_API_PATH yarn --frozen-lockfile

COPY --chown=node . .

RUN RAZZLE_API_PATH=VOLTO_API_PATH RAZZLE_INTERNAL_API_PATH=VOLTO_INTERNAL_API_PATH yarn build && \
    rm -rf /home/node/.cache && \
    apt-get purge ${BUILD_DEPS} && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

EXPOSE 3000 3001 4000 4001

ENTRYPOINT ["/home/node/entrypoint.sh"]
CMD ["yarn", "start:prod"]

