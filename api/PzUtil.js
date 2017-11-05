/*
 * PzTimeKeeper.js
 * @author Sasaken555
 * @since 2017/11/05
 * 勤怠管理系APIを補助するその他のAPI群
 */
'use strict';

module.exports = (app, options) => {
  app.post('/now', (req, res, next) => {
    res.status(200).send({
      response_type: 'in_channel',
      text: "現在時刻: " + new Date().toLocaleString()
    });
  });
};
