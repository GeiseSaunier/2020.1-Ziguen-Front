FROM node:10.16.3

RUN mkdir app

WORKDIR /app

ADD . /app

RUN yarn install

EXPOSE 3000

CMD ["yarn","dev"]