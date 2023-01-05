FROM node:16-alpine as builder
WORKDIR /code/
RUN npm ci
ADD . . #Fichier .dockerignore à la racine
RUN npm run build
