#!/usr/bin/env bash
set -e

apt-get update -y

apt-get install python-software-properties -y
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
apt-get install nodejs -y

ln -s /usr/bin/nodejs /usr/bin/node

npm install -g --no-optional pm2
pm2 update