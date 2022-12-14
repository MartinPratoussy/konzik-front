FROM ubuntu:22.04

RUN mkdir /app
COPY ./frontend-konzik/ /app/frontend-konzik/

WORKDIR /app/

RUN apt-get update -yq \
&& apt-get install curl -yq \
&& curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
&& apt-get install nodejs -yq \
&& npm install vue@3.2.41 vue-router@4.1.5 vite@3.1.8 pinia@2.0.23 tailwindcss@3.2.1 postcss@8.4.18 autoprefixer@10.4.12

RUN npm install

CMD npm run build