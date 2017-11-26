/*
 * Function : post-route.js
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

const ERROR = require('../../config/error');

module.exports = function(express) {
  // Invalid API
  express.use((req, res, next) => {
    const err = new Error(ERROR[ERROR.INVALID_API]);
    err.code = ERROR.INVALID_API;
    err.status = 400;
    next(err);
  });

  // Error
  express.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      status: false,
      code: err.code || ERROR.SYSTEM_ERROR,
      message: err.message || ERROR[ERROR.SYSTEM_ERROR],
      data: ''
    });
  });
};
