const webpack = require('webpack')
const merge = require('webpack-merge')
const { resolve } = require('path')
const baseConfig = require('./webpack.config.base')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = merge.smart(baseConfig, {
  target: 'electron-renderer',
  devtool: 'source-map',
  mode: 'production',
  entry: {
    app: ['./src/renderer/app'],
  },
  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.(png|gif|jpg|woff2|ttf|svg)$/,
        use: ['url-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
    new UglifyJsPlugin()
  ],
})

module.exports = config
