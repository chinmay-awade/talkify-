#!/bin/bash

echo "👉 Building Vite project..."
npm run build

echo "🚀 Uploading dist/ to VPS..."
rsync -avz --delete dist/ root@talkify.omodigital.io:/home/talkify/htdocs/dist/

echo "✅ Deployed successfully to VPS!"
