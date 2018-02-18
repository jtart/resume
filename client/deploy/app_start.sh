#!/usr/bin/env bash

cd /home/ubuntu/jordan-tart
NODE_ENV=production pm2 restart server.js -f