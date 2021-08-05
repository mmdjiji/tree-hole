FROM node:latest
ENV TIME_ZONE=Asia/Shanghai
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN yarn install
EXPOSE 8000
CMD npm start
