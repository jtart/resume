#!/usr/bin/env bash

### WARNING ###
# Be careful when making changes to this script as you will have to do a manual deploy ignoring the app stop step if this script is broken.

pm2 stop server

rm -rf /home/ubuntu/jordan-tart