/*
 * Function : knex-mysql.js
 *
 * Description :
 *
 * Copyright (c) 2017, Yoonseok Oh.
 * Licensed under Yoonseok Oh
 *
 * Email : yoonseok.oh@icloud.com
 *
 */

const connectInfo = cfg.mysql.connect;
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: connectInfo.host,
    port: connectInfo.port,
    user: connectInfo.user,
    password: connectInfo.password,
    database: 'test',
    dateStrings : true
  },
  pool: {
    min: 0,
    max: cfg.env === 'production' ? 20 : 1
  }
});

module.exports = knex;
