FROM node:alpine
WORKDIR /client
COPY package.json .
RUN npm i --legacy-peer-deps
COPY . .
CMD ["npm", "start"]