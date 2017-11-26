/*
 * Function : index.js
 *
 * Description :
 *
 * Copyright (c) 2017, Yoonseok Oh.
 * Licensed under Yoonseok Oh
 *
 * Email : yoonseok.oh@icloud.com
 *
 */

'use strict';

const express = require('express');
const router = express.Router();

const oauth = require('../../components/oauth');

// API auth
router.use('/auth', require('./auth'));

// API Version 1.x
router.use('/v1', oauth.tokenCheck, require('./v1/index'));

// Default - Get : Show main page
router.get('/', function (req, res, next) {
  next();
});

// Default - Get : Show main page
router.post('/', function (req, res, next) {
  next();
});

module.exports = router;
