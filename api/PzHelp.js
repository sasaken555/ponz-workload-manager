/*
 * PzHelp.js
 * @author Sasaken555
 * @since 2017/11/05
 * 勤怠管理系APIを補助するその他のAPI群
 */
'use strict';

const moment = require('moment-timezone');
const config = require('../config/PzConfig');

module.exports = (app, options) => {
  app.post('/worknow', (req, res, next) => {
    // Slackトークン認証を行う
    // 認証エラーなら、403エラーで弾く!!

    // ベースとなるUTC時間を設定
    const UTCDateStr = new Date().toUTCString();
    res.status(200).send({
      response_type: 'in_channel',
      text: "現在時刻: " + moment.tz(UTCDateStr, config.timezone).format('YYYY-MM-DD HH:mm:ss')
    });
  });
};
