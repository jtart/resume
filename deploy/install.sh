#!/usr/bin/env bash
set -e

apt-get update -y
apt-get install nodejs -y
apt-get install npm -y

ln -s /usr/bin/nodejs /usr/bin/node

npm install -g --no-optional pm2
pm2 update