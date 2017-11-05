# ponz-workload-manager
## 機能
以下機能をSlackをUIとして実現させる
* 勤務時間を入力・管理
* 週次・月次での勤怠時間出力
* 勤怠時間実績をファイル出力

## API

|Slack側|アプリ側|機能説明|
|:---|:---|:---|
|/workon *YYYYMMDDhhmm*|/workon?knmDttm=*YYYYMMDDhhmm*|指定日の勤務開始時間として記録する|
|/workoff *YYYYMMDDhhmm*|/workoff?knmDttm=*YYYYMMDDhhmm*|指定日の勤務終了時間として記録する|
|/worktime thisweek|/worktime/week?targetWeek=*YYYYMMDD*|指定週の勤務時間実績を出力する|
|/worktime thismonth|/worktime/month?targetMonth=*YYYYMM*|指定月の勤務時間実績を出力する|
|/worktimefile thisweek|/worktime/file/week?targetWeek=*YYYYMMDD*|指定月の勤務時間実績をファイルとして出力する|
|/worktimefile thismonth|/worktime/file/month?targetMonth=*YYYYMM*|指定週の勤務時間実績をファイルとして出力する|
|/now|/worknow||

## システム構成

* 基盤 ... [IBM Bluemix](https://console.bluemix.net)
* アプリ ... [Node.js](https://nodejs.org/ja/) (v8.9.0 2017/11/05時点のLTS)
* DB ... Cloudant NoSQL DB
