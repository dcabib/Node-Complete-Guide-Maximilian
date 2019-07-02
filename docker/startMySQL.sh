#docker run -p 3306:3306 --name mysql-container -e MYSQL_ROOT_PASSWORD=mypassword -d mysql:5.6

docker run -p 3306:3306 --name mysql_8.0.16 -e MYSQL_ROOT_PASSWORD=mypassword -d mysql:8.0.16 mysqld --default-authentication-plugin=mysql_native_password

