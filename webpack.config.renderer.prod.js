const webpack = require('webpack')
const merge = require('webpack-merge')
const { resolve } = require('path')
const baseConfig = require('./webpack.config.base')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = merge.smart(baseConfig, {
  devtool: 'source-map',
  mode: 'production',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.(png|gif|jpg|woff2|ttf|svg)$/,
        use: ['url-loader'],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
    new UglifyJsPlugin()
  ],
})

const appConfig = merge.smart(config, {
  target: 'electron-renderer',

  entry: {
    app: ['./src/renderer/app'],
  },
})

module.exports = [appConfig]
