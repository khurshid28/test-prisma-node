FROM node:latest

WORKDIR /usr/src/app


COPY package*.json ./


RUN npm i --save
RUN npm i --save-dev


COPY . .

RUN npx prisma generate



EXPOSE 3000


CMD [ "node","app.js" ]

