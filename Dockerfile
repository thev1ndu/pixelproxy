FROM node:24-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY server.js .

COPY index.html .

COPY images ./images

EXPOSE 3000

CMD ["npm", "run", "dev"]