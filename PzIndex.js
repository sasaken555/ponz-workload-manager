/*
 * PzIndex.js
 * @author Sasaken555
 * @since 2017/11/05
 * 各種ソースを実行するエントリーポイント
 */
const server = require('./server/PzServer');
// const repository = require('./repository/repository');
const config = require('./config/PzConfig');

// Logging
console.log("Workload manager awaking...");
console.log("Connecting to the repository...");

console.log("Connect successfully! Starging the server...");
// ポートとDBの変数を指定してサーバーを起動
server.start({
  port: config.port
}).then((app) => {
  console.log("Server started successfully! Running on port " + config.port + ".");
});
