const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const webpack = require('webpack')
const { getConfig } = require('./webpack.config.base')

const PORT = 5000

const appConfig = getConfig({
  plugins: [
    new HardSourceWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Guildspeak',
      template: './static/pages/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  entry: {
    index: './src/renderer/app'
  },
  output: {
    publicPath: `http://localhost:${PORT}/`
  },

  module: {
    rules: [
      {
        test: /\.(png|gif|jpg|woff2|ttf|svg)$/,
        use: ['url-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  target: 'electron-renderer',

  devServer: {
    contentBase: join(__dirname, 'dist'),
    port: PORT,
    hot: true,
    inline: true,
    disableHostCheck: true,
    historyApiFallback: true
  }
})

module.exports = appConfig
