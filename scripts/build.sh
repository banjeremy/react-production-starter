#!/usr/bin/env sh

rm -rf tmp/
mkdir -p tmp/public
cp -r static/* tmp/public/
webpack --config ./webpack.production.config.js --progress
cp -r package.json api bin tmp/
mkdir -p dist/
cd tmp
zip -r ../dist/$npm_package_name-$(date +%s).zip .
cd ..
rm -rf tmp/
