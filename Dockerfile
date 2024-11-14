FROM node:18.20-alpine3.20

RUN mkdir -p /home/app
WORKDIR /home/app
COPY . .
RUN npm install 
EXPOSE 3000
CMD [ "npm", "start" ]
