FROM node:latest
ENV TIME_ZONE=Asia/Shanghai
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm i --registry https://registry.npm.taobao.org
EXPOSE 8000
CMD npm start
