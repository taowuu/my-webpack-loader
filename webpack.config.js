const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 
module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/app.js'),
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'app.js',
  },
  devtool:'source-map',
  module: {
    rules:[
      {
        // .tpl 文件
        test:/\.tpl$/,
        use:[
          'babel-loader',
          {
            loader:'./loaders/tpl-loader',
            options: {
              log: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html')
    })
  ],
  devServer: {
    port: 3333
  }
}