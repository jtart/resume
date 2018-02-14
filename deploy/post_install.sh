#!/usr/bin/env bash
set -e

cd /home/ubuntu/jordan-tart
npm install

hasRc=`grep "su -l $USER" /etc/rc.d/rc.local | cat`
if [ -z "$hasRc" ]; then
    sudo sh -c "echo 'su -l $USER -c \"cd /home/ubuntu/jordan-tart;sh ./deploy/app_start.sh\"' >> /etc/rc.d/rc.local"
fi