
const path = require('path');
const outPath = path.join(__dirname, '../dev');
const baseConfig = require("./webpack.base");

const config = baseConfig(outPath)

module.exports = {
  ...config,
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  watch: true,
  watchOptions: {
    poll: 1000,  //轮询间隔时间
    aggregateTimeout: 500, //防抖（在输入时间停止刷新计时）
    ignored: /node_modules/
  }
};
