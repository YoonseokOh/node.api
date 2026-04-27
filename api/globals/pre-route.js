/*
 * Function : pre-route.js
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

const uid = require('uid-safe');

module.exports = function(express) {
  if (cfg.env === 'development') {
    express.use(function(req, res, next) {
      console.log(decodeURI(req.originalUrl));
      next();
    });
  }

  express.use(function (req, res, next) {
    // User token for tracking log (including guest)
    if (!req.cookies[cfg.token.session]) {
      const userToken = uid.sync(24);
      const isProduction = process.env.NODE_ENV === 'production' || cfg.env === 'production';

      res.cookie(cfg.token.session, userToken, {
        httpOnly: true,
        maxAge: 1 * cfg.parameters.time.month2msec,
        sameSite: 'lax',
        secure: isProduction
      });
    }
    next();
  });
};
