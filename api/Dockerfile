###########################
####### DEVELOPMENT #######
###########################

FROM node:18 AS development

WORKDIR /mblanchet/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000


##########################
####### PRODUCTION #######
##########################

FROM node:18 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /mblanchet/src/app

COPY --from=development /mblanchet/src/app/ .

EXPOSE 8080

CMD ["node", "dist/main"]