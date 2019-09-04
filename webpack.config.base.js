const { resolve } = require('path')
const merge = require('webpack-merge')
const Dotenv = require('dotenv-webpack')

const dev = process.env.NODE_ENV === 'development'

const config = {
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'eval-source-map' : 'source-map',
  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/,
        include: resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [new Dotenv()],

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
