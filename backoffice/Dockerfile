FROM node:18 AS development

WORKDIR /mblanchet/backoffice/src/app

COPY package*.json ./

RUN npm install

RUN npm i -g ionic cordova

COPY . .

RUN npm run build

EXPOSE 8100
