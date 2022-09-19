FROM node:lts-alpine3.15
MAINTAINER Aquarius
LABEL description="NodeJs 16 @ alpine 3.15"
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install -g npm@latest
RUN npm ci --omit=dev
RUN chown -R node:node /usr/src/app
USER node
CMD [ "npm", "run", "serve" ]
