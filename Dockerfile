FROM node:16-alpine as builder
WORKDIR /code/
ADD package-lock.json .
ADD package.json .
RUN npm ci
ADD . .
RUN npm run build

#FROM devforth/spa-to-http:latest
#COPY --from=builder /code/dist/ .

FROM nginx:latest
COPY --from=builder /code/dist/ /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/nginx.conf
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

#FROM httpd:latest
#COPY --from=builder /code/dist/ /usr/local/apache2/htdocs/
