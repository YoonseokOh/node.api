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
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

require('./api/globals/alias');
require('./api/globals/constants');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
