FROM node:14-alpine

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install 

COPY . .

EXPOSE $PORT

CMD npm run start:dev