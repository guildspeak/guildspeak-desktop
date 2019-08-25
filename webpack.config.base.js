const { resolve } = require('path')
const merge = require('webpack-merge')

const dev = process.env.NODE_ENV  === 'development'

const config = {
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'eval-source-map' : 'source-map',
  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: [
          'cache-loader',
          {
            loader: 'babel-loader',
          }
        ],
        exclude: /node_modules/,
        include: resolve(__dirname, 'src')
      }
    ]
  },

  node: {
    __dirname: false,
    __filename: false
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json']
  }
}

function getConfig(...cfg) {
  return merge(config, ...cfg)
}

module.exports = { getConfig, dev }
