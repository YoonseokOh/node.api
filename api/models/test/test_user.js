/*
 * Function : test_user.js
 *
 * Description :
 *
 * Copyright (c) 2019, Yoonseok Oh.
 * Licensed under Yoonseok Oh
 *
 * Email : yoonseok.oh@icloud.com
 *
 */

"use strict";

const knex = require('./knex-mysql.js');

const table = 'customer';

const validKey = {

};

//@ Not used -> for oauth2.0 keys
module.exports = {
  selectbyId: function (id) {
    return knex(table).where('id', id).first();
  },
  selectbyKey: function(key, value) {
    if (key && validKey[key]) {
      return knex(table).where(key, value).first();
    } else {
      return Promise.resolve(false);
    }
  },
  update: function (id, param) {
    return knex(table).where('id', id).update(param);
  },
  updatebyId: function (id, param) {
    return knex(table).where('id', id).update(param);
  },
  insert: function (params) {
    return knex(table).insert(params);
  },
};
