const webpack = require('webpack')
const merge = require('webpack-merge')
const { resolve } = require('path')
const baseConfig = require('./webpack.config.base')
const spawn = require('child_process').spawn
const PORT = 2003

const config = merge.smart(baseConfig, {
  devtool: 'eval-source-map',
  mode: 'development',
  output: {
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json',
    publicPath: `http://localhost:${PORT}/`,
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

  plugins: [new webpack.HotModuleReplacementPlugin()],
})

const appConfig = merge.smart(config, {
  target: 'electron-renderer',
  entry: {
    app: ['react-hot-loader/patch', './src/renderer/app'],
  },

  devServer: {
    contentBase: './src/',
    port: PORT,
    stats: {
      colors: true,
    },
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100,
    },
    hot: true,
    inline: true,
    before() {
      console.log('Starting electron process')
      spawn('npm', ['run', 'start'], {
        shell: true,
        env: process.env,
        stdio: 'inherit'
      })
        .on('close', code => process.exit(code))
        .on('error', spawnError => console.error(spawnError))
    }
  },
})

module.exports = [appConfig]
