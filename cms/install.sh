#!/bin/bash

if [[ "$OSTYPE" == "linux-gnu" ]]; then
  sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password password root'
  sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password root'
  sudo apt-get -y install mysql-server
  sudo apt-get -y install php php-mysql
  wget https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
  sudo chmod +x wp-cli.phar
  sudo mv wp-cli.phar /usr/local/bin/wp
  wget http://robo.li/robo.phar
  sudo chmod +x robo.phar
  sudo mv robo.phar /usr/bin/robo
  sudo service mysql start
elif [[ "$OSTYPE" == "darwin"* ]]; then
  brew install homebrew/php/wp-cli
  brew install homebrew/php/robo
  brew install mysql
  mysql.server start
  if mysql -uroot; then
    mysql -uroot <<_EOF_
      UPDATE mysql.user SET authentication_string=PASSWORD('root') WHERE User='root';
      DELETE FROM mysql.user WHERE User='';
      DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1');
      DROP DATABASE IF EXISTS test;
      DELETE FROM mysql.db WHERE Db='test' OR Db='test\\_%';
      FLUSH PRIVILEGES;
_EOF_
  fi
else
  echo "Sorry, this installation script only works on Mac OS X and Ubuntu Linux. Looks like your operating system is $OSTYPE."
fi