const { join, resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { getConfig, dev } = require('./webpack.config.base')

const PORT = 5000

const config = {
  target: 'electron-renderer',
  entry: {
    index: './src/renderer/app'
  },
  plugins: [],
  output: {
    path: resolve(__dirname, 'build'),
    chunkFilename: '[name].[chunkhash].js'
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
}

if (dev) {
  config.devServer = {
    contentBase: join(__dirname, 'build'),
    port: PORT,
    hot: true,
    inline: true,
    disableHostCheck: true,
    historyApiFallback: true
  }
  config.output.publicPath = `http://localhost:${PORT}/`
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

const appConfig = getConfig(config, {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Guildspeak',
      template: './static/pages/index.html',
      filename: 'index.html'
    })
  ],

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
  }
})

module.exports = appConfig
