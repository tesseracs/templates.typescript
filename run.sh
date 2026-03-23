#!/bin/sh
set -e
npm install
npm run build
node dist/index.js
