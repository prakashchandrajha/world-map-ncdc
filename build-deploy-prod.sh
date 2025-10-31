#!/bin/bash

# Ensure script exits on error
set -e

echo "Building app..."
npm run build
rm -rf /home/xorz/docker-data/xorz-nginx/nginx-data/html/prod/ncdc/
mkdir -p /home/xorz/docker-data/xorz-nginx/nginx-data/html/prod/ncdc/
mv dist/world-map-ncdc/browser/* /home/xorz/docker-data/xorz-nginx/nginx-data/html/prod/ncdc/
