#!/usr/bin/env bash
set -e

apt-get update -y
apt-get install nodejs -y
apt-get install npm -y

npm install -g pm2
pm2 update