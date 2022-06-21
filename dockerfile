FROM node:16-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install ci

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
