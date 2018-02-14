#!/usr/bin/env bash

cd /home/ubuntu/jordan-tart
NODE_ENV=production node server.js
# NODE_ENV=production pm2 start server.js -n www -i 0