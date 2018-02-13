sudo apt-get -y install gcc build-essential zlib1g-dev libpcre3 libpcre3-dev unzip uuid-dev upstart

cd /home/ubuntu
wget https://www.openssl.org/source/openssl-1.1.0c.tar.gz

tar -xzvf openssl-1.1.0c.tar.gz
rm -rf /home/ubuntu/openssl-1.1.0c.tar.gz

bash <(curl -f -L -sS https://ngxpagespeed.com/install) --nginx-version latest -a '--with-openssl=/home/ubuntu/openssl-1.1.0c --with-compat --with-file-aio --with-threads --with-http_addition_module --with-http_auth_request_module --with-http_dav_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_mp4_module --with-http_random_index_module --with-http_realip_module --with-http_secure_link_module --with-http_slice_module --with-http_ssl_module --with-http_stub_status_module --with-http_sub_module --with-http_v2_module --with-mail --with-mail_ssl_module --with-stream --with-stream_realip_module --with-stream_ssl_module --with-stream_ssl_preread_module' -y

##LETSENCRYPT STUFF
