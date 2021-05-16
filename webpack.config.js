const path = require('path');

module.exports = {
  entry: './src/index-体验diff算法.js',
  output: {
    //虚拟打包路径，就是说文件夹不会真正的生成
    publicPath: 'dist',
    filename: 'bundle.js',
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: {
                  version: '3'
                },
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  edge: '17',
                  safari: '10'
                }
              }
            ]
          ]
        }
      }
    ]
  },
  // devServer: {
  //   port: 9090,
  //   contentBase: 'www'
  // }
}