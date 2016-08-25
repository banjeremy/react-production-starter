#!/usr/bin/env sh

rm -rf static/
mkdir static
cp -r src/public/* static/
webpack --config ./webpack.production.config.js --progress
mkdir -p dist/
zip -r dist/$npm_package_name-$(date +%s).zip . -i package.json -i .babelrc -i api/\* -i bin/server.js -i static/\*  #. -x .\* -x node_modules/\* -x dist/\* -x src/\* -x tmp/\*
