1. use root role login the server

2. cd to usr/local folder

3. run `wget http://nginx.org/download/nginx-1.18.0.tar.gz` to download nginx

4. run `tar -xvzf nginx-1.18.0.tar.gz` to unzip 

5.  nginx depend on PCRE and zlib, hence we need to run `yum -y install pcre pcre-devel` to install pcre. run `yum install -y zlib-devel` to install zlib
or run
`yum -y install make zlib-devel gcc gcc-c++ libtool openssl openssl-devel` to install make, zlib-devel, gcc, gcc-c++, openssl, openssl-devel, libtool.

6. `cd` to `usr/local/nginx-1.18.0` run `./configure`, you will see the nginx path informations like ( nginx binary file: `/usr/local/nginx/sbin/nginx`)

7. stay at `usr/local/nginx-1.18.0` run `make && make install` to compile and then nginx folder will be created at `usr/local/`

8. cd to `/usr/local/nginx/sbin/nginx` run `./nginx`

9. cd  to `/usr/local/nginx/conf` we can edit nginx.conf file

10. remember to `安全组规则` add your port

11. run `ln -s /usr/local/nginx/sbin/nginx /usr/local/bin/` to make nginx gloabl, then you can run nginx command everywhere.

11. check [nginx config in linux]({% post_url  2020-11-27-nginx-config-in-linux %})
