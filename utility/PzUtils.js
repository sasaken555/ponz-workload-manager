/*
 * PzUtils.js
 * @author Sasaken555
 * @since 2017/11/05
 * 補助関数群
 */
'use strict';

const config = require('../config/PzConfig');

module.exports = {
  /*
   * PzCheckToken(rtnToken)
   * 渡されたTokenを検証する
   * @params String rtnToken 渡されたToken
   * @return Boolean validStatus 認証結果
   */
  PzCheckToken: (rtnToken) => {
    let validStatus = false;

    // Slack以外から渡された場合
    if (!rtnToken) {
      console.log("No Token provided...");
      return validStatus;
    }
    // Slackであっても、指定外のアプリからアクセスされた場合
    if (rtnToken !== config.slctoken) {
      console.log("Unmatch Token...");
      return validStatus
    }

    // ここまででトークン一致が確認できるので認証結果OKとしてtrueを返す
    console.log("validation succeeded!!");
    validStatus = true;
    return validStatus;
  }
}
