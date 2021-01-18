#!/usr/bin/env bash
set -Ex

function apply_path {
    mainjs=./build/server.js
    bundlejs=./build/public/static/js/*.js
    test -f $mainjs

    echo "Check that we have API_PATH and API vars"
    test -n "$RAZZLE_API_PATH"

    echo "Changing built files inplace"
    sed -i "s#VOLTO_API_PATH#${RAZZLE_API_PATH}#g" $mainjs
    sed -i "s#VOLTO_API_PATH#${RAZZLE_API_PATH}#g" $bundlejs
    sed -i "s#VOLTO_INTERNAL_API_PATH#${RAZZLE_INTERNAL_API_PATH}#g" $mainjs
    sed -i "s#VOLTO_INTERNAL_API_PATH#${RAZZLE_INTERNAL_API_PATH}#g" $bundlejs

    echo "Zipping JS Files"
    gzip -fk $mainjs
}

# Should we monkey patch?
test -n "$RAZZLE_API_PATH" && apply_path

#./create-sentry-release.sh

echo "Starting Volto"
exec "$@"

