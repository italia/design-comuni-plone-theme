FROM node:12-stretch-slim

RUN runDeps="git openssl ca-certificates" && \
    apt-get update && \
    apt-get install -y --no-install-recommends $runDeps && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /opt/frontend/

COPY mrs.developer.json jsconfig.json package.json yarn.lock ./
RUN mkdir -p src && \
    chown -R node /opt/frontend/

USER node

RUN RAZZLE_API_PATH=VOLTO_API_PATH RAZZLE_INTERNAL_API_PATH=VOLTO_INTERNAL_API_PATH yarn --frozen-lockfile

USER root
COPY . .
# Exclude node_modules from chown, it's slow and unneeded
# As seen at https://superuser.com/a/1575562
RUN find . -path ./node_modules -prune -o -exec chown node {} +
USER node

RUN RAZZLE_API_PATH=VOLTO_API_PATH RAZZLE_INTERNAL_API_PATH=VOLTO_INTERNAL_API_PATH yarn build && \
    rm -rf /home/node/.cache

EXPOSE 3000 3001 4000 4001

ENTRYPOINT ["/opt/frontend/entrypoint.sh"]
CMD ["yarn", "start:prod"]

