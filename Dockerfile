FROM httpd:2.4
COPY ./dist/app-env-poc /usr/local/apache2/htdocs/
