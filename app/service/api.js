'use strict';

const sqlite3 = require('sqlite3').verbose();

const xss = require('xss');

const db = new sqlite3.Database('data.db');
db.run("create table if not exists message (time int, text varchar, ip varchar)", (err) => {
  if(err) {
    logger.err(err);
  }
});
db.close();

const insert = (time, text, ip) => new Promise((resolve, reject) => {
  const db = new sqlite3.Database('data.db');
  db.run("insert into message values (?, ?, ?)", time, text, ip, (err) => {
    if(!err) {
      resolve(true);
    } else {
      reject(err);
    }
  })
});

const select = (number) => new Promise((resolve, reject) => {
  const db = new sqlite3.Database('data.db');
  db.all("select * from message order by time desc limit ?, ?", number, number+1, (err, row) => {
    if(!err) {
      db.close();
      resolve(row);
    } else {
      db.close();
      reject(err);
    }
  });
});

const Service = require('egg').Service;

class ApiService extends Service {
  async lookup(number) {

    let result = await select(number);
    if(result[0]) {
      return {
        time: result[0].time,
        text: xss(result[0].text)
      }
    } else {
      return null;
    }
  }
  async post(text, ip) {
    let timeStamp = Date.now();
    let result = await insert(timeStamp, text, ip);
    if(result) {
      return 'success';
    }
    return 'failed';
  }
}

module.exports = ApiService;