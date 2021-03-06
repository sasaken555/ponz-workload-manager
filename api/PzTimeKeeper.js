/*
 * PzTimeKeeper.js
 * @author Sasaken555
 * @since 2017/11/05
 * 勤務時間を記録するAPI
 */
'use strict';

/*
 * knmDttmFormat(knmDttm)
 * @params String knmDttm 年月日時分
 * @return YYYY-MM-DD hh:mm:ss形式の時刻
 * パラメータに渡された時刻文字列をDateオブジェクトに変換する
 */
function knmDttmFormat(knmDttm) {
  // 文字列から各値を切り出し
  const knmYear = knmDttm.slice(0, 4);
  const knmMonth = knmDttm.slice(4, 6) - 1; // Dateの仕様で+1ヶ月進むことへの対応
  const knmDay = knmDttm.slice(6, 8);
  const knmHour = knmDttm.slice(8, 10);
  const knmMinite = knmDttm.slice(10);

  // 秒まで指定していないため、Dateオブジェクトの秒は '00' 固定となる
  return new Date(knmYear, knmMonth, knmDay, knmHour, knmMinite);
}

const moment = require('moment-timezone');
const config = require('../config/PzConfig');
const util = require('../utility/PzUtils');

module.exports = (app, options) => {
  app.post('/workon', (req, res, next) => {
    // Slackトークン認証を行う
    // 認証エラーなら、403エラーで弾く!!
    const reqToken = req.body.token;

    if (util.PzCheckToken(reqToken) === false) {
      res.set('Content-Type', 'text/html');
      res.status(403).send("不正なリクエストです。");

      // ここでreturnで抜けないと, Expressサーバー上は200で返却される
      return;
    }

    // 入力したパラメータから年月日時分を切り出し
    const knmDttm = req.body.text;
    const knmStartDttm = moment(knmDttmFormat(knmDttm)).format("YYYY-MM-DD HH:mm:ss");

    res.status(200).send({
      response_type: 'in_channel',
      text: `勤務開始時間: ${knmStartDttm}`
    });
  });

  app.post('/workoff', (req, res, next) => {
    // Slackトークン認証を行う
    // 認証エラーなら、403エラーで弾く!!
    const reqToken = req.body.token;

    if (util.PzCheckToken(reqToken) === false) {
      res.set('Content-Type', 'text/html');
      res.status(403).send("不正なリクエストです。");

      // ここでreturnで抜けないと, Expressサーバー上は200で返却される
      return;
    }

    // 入力したパラメータから年月日時分を切り出し
    const knmDttm = req.body.text;
    const knmEndDttm = moment(knmDttmFormat(knmDttm)).format("YYYY-MM-DD HH:mm:ss");

    res.status(200).send({
      response_type: 'in_channel',
      text: `勤務終了時間: ${knmEndDttm}`
    });
  });
};
