/*
 * Function : app.js
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
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

require('./api/globals/alias');
require('./api/globals/constants');

app.disable('x-powered-by');

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      baseUri: ["'self'"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'", 'data:'],
      formAction: ["'self'"],
      frameAncestors: ["'none'"],
      imgSrc: ["'self'", 'data:'],
      objectSrc: ["'none'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
      upgradeInsecureRequests: null
    }
  }
}));

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/public')));

app.use('/docs', express.static(path.join(__dirname, '/apidoc')));

// Set pre route
require('./api/globals/pre-route')(app);

// Set main routes
const routes = require('./api/routes');
app.use('/', routes);

// Set post route
require('./api/globals/post-route')(app);

module.exports = app;
