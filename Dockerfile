FROM nginx:alpine

RUN rm /etc/nginx/conf.d/*

COPY catandice.conf /etc/nginx/conf.d

COPY dist /usr/share/nginx/html
