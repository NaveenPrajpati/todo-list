# syntax=docker/dockerfile:1.4

FROM node:latest AS development

# Create app directory
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm i
COPY . /usr/src/app


ENV BASE_URL=mongodb+srv://root:nav123@naveencluster.w251o46.mongodb.net/todos

EXPOSE 4000

CMD [ "npm", "run", "start" ]

