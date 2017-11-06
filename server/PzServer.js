/*
 * PzServer.js
 * @author Sasaken555
 * @since 2017/11/05
 * APIを読み込み、Expressサーバーを生成する
 */
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports.start = (options) => {
  return new Promise((resolve, reject) => {
    if (!options.port) throw new Error("A server must be started with port.")

    const app = express();
    // Logging mode = development
    app.use(morgan('dev'));
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());

    // Load APIs
    require('../api/PzTimeKeeper')(app, options);
    require('../api/PzTimeShow')(app, options);
    require('../api/PzHelp')(app, options);

    // Create server, return running server Object
    const server = app.listen(options.port, () => {
      resolve(server);
    });
  });
};
