FROM httpd:2.4
COPY ./dist/boom /usr/local/apache2/htdocs/
