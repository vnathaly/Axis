FROM node:18.20-alpine3.20

RUN mkdir -p /home/app
COPY . /home/app
EXPOSE 3000
CMD [ "npm", "start" ]

