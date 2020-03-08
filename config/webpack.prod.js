
const path = require('path');
const outPath = path.join(__dirname, '../build');
const baseConfig = require("./webpack.base");


const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = baseConfig(outPath)

module.exports = {
  ...config,
  plugins: [
    new CleanWebpackPlugin(),
    ...config.plugins,
  ],
  mode: 'production',
};
