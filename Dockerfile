FROM node:10.16.3

RUN mkdir app

WORKDIR /app

ADD . /app

RUN npm install

EXPOSE 3000

CMD ["yarn","start"]