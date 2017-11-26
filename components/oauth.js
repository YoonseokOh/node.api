/*
 * Function : index.js
 *
 * Description : start up
 *
 * Copyright (c) 2017, Yoonseok Oh.
 * Licensed under Yoonseok Oh
 *
 * Email : yoonseok.oh@icloud.com
 *
 */

'use strict';

module.exports = {
  tokenCheck: (req, res, next) => {
    next();
  }
};
