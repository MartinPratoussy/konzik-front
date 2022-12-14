# konzik-front

This repo is the front of the project.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
---

## Dockerfile Setup

### NodeJS and npm version :
- NodeJS : v16.18.1
- npm : v8.19.2
```sh
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```

### Vue :
- vue : v3.2.41
- vue-router : v4.1.5
- vite : v3.1.8
- pinia : v2.0.23
- @vitejs/plugin-vue@3.1.2 (not sure)
```sh
npm install vue@3.2.41 vue-router@4.1.5 vite@3.1.8 pinia@2.0.23
```

### Tailwindcss :
- tailwindcss : v3.2.1
- postcss : v8.4.18
- autoprefixer : v10.4.12
```sh
npm install -D tailwindcss@3.2.1 postcss@8.4.18 autoprefixer@10.4.12
```
