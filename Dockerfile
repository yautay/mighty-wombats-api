FROM node:lts-alpine3.15
MAINTAINER Aquarius
LABEL description="NodeJs 16 @ alpine 3.15"
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm ci --only=production
