#!/bin/bash

# Exit on error
set -e

# Variables
REMOTE_USER="root"                     # or your SSH username
REMOTE_HOST="your.server.ip.or.domain" # replace with your server IP or domain
REMOTE_PATH="/var/www/html/ncdc"       # destination on your server

echo "Building app..."
npm run build

# Build output path
LOCAL_BUILD_PATH="dist/world-map-ncdc/browser"

# Check if build exists
if [ ! -d "$LOCAL_BUILD_PATH" ]; then
  echo "❌ Build directory not found: $LOCAL_BUILD_PATH"
  exit 1
fi

echo "Uploading files to $REMOTE_HOST..."
ssh $REMOTE_USER@$REMOTE_HOST "rm -rf $REMOTE_PATH && mkdir -p $REMOTE_PATH"
scp -r $LOCAL_BUILD_PATH/* $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/

echo "✅ Deployment complete! Files uploaded to $REMOTE_HOST:$REMOTE_PATH"
