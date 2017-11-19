FROM nginx:alpine

RUN rm /etc/nginx/conf.d/*

ENV PORT 80

CMD envsubst '$PORT' < /etc/nginx/conf.d/catandice.conf.template > /etc/nginx/conf.d/catandice.conf && nginx -g 'daemon off;'

COPY catandice.conf.template /etc/nginx/conf.d

COPY dist /usr/share/nginx/html
