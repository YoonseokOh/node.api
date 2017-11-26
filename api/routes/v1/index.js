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

const api = require('./api');

/**
 * @apiDefine           NotFoundError
 *
 * @apiError            (Error 404) {String} error 페이지를 찾을 수 없음.
 *
 * @apiErrorExample     {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "페이지를 찾을 수 없음"
 *     }
 */

/**
 * @apiDefine           FailedResponse
 *
 * @apiError            (Error 400) {Boolean} status false
 * @apiError            (Error 400) {String} code 대문자와 숫자로 구성된 에러 코드
 * @apiError            (Error 400) {String} message 에러 메세지
 * @apiError            (Error 400) {String} data 에러와 관련된 값
 *
 * @apiErrorExample     {json} Error-Response:
 *     HTTP/1.1 400
 *     {
 *       "status": false
 *       "code": "XXXX1234"
 *       "message": "에러 메세지"
 *       "data": ""
 *     }
 */



/**
 * @api                 {get} /v1/api /api
 * @apiGroup            API
 * @apiName             apiMain
 * @apiVersion          1.0.0
 * @apiDescription      <code>key</code>에 값을 입력합니다
 *
 * @apiParam            {String} key value값
 *
 * @apiParamExample {json} Request-Example:
 *  {
 *      "key": "value"
 *  }
 *
 * @apiSuccess          {Boolean} status true면 정상적인 응답
 * @apiSuccess          {String} code 대문자와 숫자로 구성된 코드
 * @apiSuccess          {String} message 처리 관련 메세지
 * @apiSuccess          {Object} data 입력된 query
 *
 * @apiSuccessExample   {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "status": true
 *    "code": "TEST0000"
 *    "message": "테스트 API 성공"
 *    "data": {
 *      "key": "value"
 *    }
 *  }
 *
 * @apiUse              FailedResponse
 */
router.get('/api', api.main);

/**
 * @api                 {get} /v1/api/sub /api/sub
 * @apiGroup            API
 * @apiName             apiSub
 * @apiVersion          1.0.0
 * @apiDescription      <code>key</code>에 값을 입력합니다
 *
 * @apiParam            {String} key value값
 *
 * @apiParamExample {json} Request-Example:
 *  {
 *      "key": "value"
 *  }
 *
 * @apiSuccess          {Boolean} status true면 정상적인 응답
 * @apiSuccess          {String} code 대문자와 숫자로 구성된 코드
 * @apiSuccess          {String} message 처리 관련 메세지
 * @apiSuccess          {Object} data 입력된 query
 *
 * @apiSuccessExample   {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "status": true
 *    "code": "TEST0001"
 *    "message": "테스트 sub API 성공"
 *    "data": {
 *      "key": "value"
 *    }
 *  }
 *
 * @apiUse              FailedResponse
 */
router.get('/api/sub', api.sub);

module.exports = router;
