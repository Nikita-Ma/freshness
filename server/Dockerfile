FROM node:latest

WORKDIR /app

EXPOSE 5000

COPY package.json ./
COPY package-lock.json ./
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm                       # note this oneRUN npm install
RUN npm install -g npm@9.6.5

COPY . ./

CMD ["npm", "run", "server"]