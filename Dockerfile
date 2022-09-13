FROM node:lts-alpine3.15

MAINTAINER Aquarius
LABEL description="NodeJs 16 @ alpine 3.15"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . /usr/src/app

CMD ["npm","start"]
