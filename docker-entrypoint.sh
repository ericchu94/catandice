#!/bin/sh

envsubst '$PORT' < /etc/nginx/conf.d/catandice.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
