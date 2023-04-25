FROM node:alpine
FROM library/postgres
COPY init.sql /docker-entrypoint-initdb.d/

WORKDIR /app
ADD init.sql /docker-entrypoint-initdb.d/

EXPOSE 5000

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["npm", "run", "server"]