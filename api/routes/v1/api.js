/*
 * Function : api.js
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

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const querystring = require('querystring');
const _ = require('lodash');

const emptyList = [];

module.exports = {
  main: (req, res, next) => {
    return res.status(200).json(new ApiRes(true, 'API0000', 'API 응답 성공', req.query))
  },

  sub: (req, res, next) => {
    return res.status(200).json(new ApiRes(true, 'API0000', 'sub API 응답 성공', req.query))
  },

  internal: (req, res, next) => {
    const url = 'http://localhost:3030/api/test?' + querystring.stringify(req.query);

    return fetch(url).then(response => response.json()).then(result => {
      if (result && _.isObject(result)) {
        if (result.status) {
          return res.status(200).json(new ApiRes(true, 'API0000', 'API 응답 성공', result.data));
        } else {
          return res.status(400).json(result);
        }
      } else {
        return res.status(400).json(new ApiRes(false, 'API9999', 'API 응답 실패', emptyList));
      }
    }).catch(next);
  }
};
