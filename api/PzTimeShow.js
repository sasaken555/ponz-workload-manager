/*
 * PzTimeKeeper.js
 * @author Sasaken555
 * @since 2017/11/05
 * 勤務時間実績を出力するAPI
 */
 'use strict';

 module.exports = (app, options) => {
   app.post('/worktime/week', (req, res, next) => {
     // Slackトークン認証を行う
     // 認証エラーなら、403エラーで弾く!!

     // 正常系
     res.status(200).send({
       response_type: 'in_channel',
       text: "週次勤務実績: "
     });
   });

   app.post('/worktime/month', (req, res, next) => {
     // Slackトークン認証を行う
     // 認証エラーなら、403エラーで弾く!!

     // 正常系
     res.status(200).send({
       response_type: 'in_channel',
       text: "月次勤務実績: "
     });
   });

   app.post('/worktime/file/week', (req, res, next) => {
     // Slackトークン認証を行う
     // 認証エラーなら、403エラーで弾く!!

     // 正常系
     res.status(200).send({
       response_type: 'in_channel',
       text: "週次勤務実績: "
     });
   });

   app.post('/worktime/file/month', (req, res, next) => {
     // Slackトークン認証を行う
     // 認証エラーなら、403エラーで弾く!!

     // 正常系
     res.status(200).send({
       response_type: 'in_channel',
       text: "月次勤務実績: "
     });
   });
 };
