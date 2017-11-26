/*
 * Function : alias.js
 *
 * Description :
 *
 * Copyright (c) 2017, Yoonseok Oh.
 * Licensed under Yoonseok Oh
 *
 * Email : yoonseok.oh@icloud.com
 *
 */

"use strict";

const Path = require('path');
const basePath = Path.join(__dirname, '../');

global._require = function(name) {
  return require(basePath + '/' + name);
};

// Api response or result type
global.ApiRes = function (status, code, message, data) {
  this.status = !!status;
  this.code = code? code : '';
  this.message = message? message : '';
  this.data = data? data : false;
};
