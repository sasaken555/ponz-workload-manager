/*
 * PzConfig.js
 * @author Sasaken555
 * @since 2017/11/05
 * 環境変数を定義する
 */

// 環境変数の読み込み 開発環境のみ.envファイルから読み込む
if (process.env.NODE_ENV === "dev") {
  require('dotenv').config();
}

module.exports = {
  port: process.env.PORT || 8321,
  slctoken: process.env.SLACKTOKEN || '',
  timezone: process.env.TIME_ZONE || "Asia/Tokyo"
};
