FROM node:alpine

WORKDIR /app

#optional port container
EXPOSE 3000

#copy files this in --> ./ (app foolder)
COPY package*.json ./

#install dep. from 7line
RUN npm install

#copy all files project
COPY . ./

CMD ["npm", "run", "start"]





