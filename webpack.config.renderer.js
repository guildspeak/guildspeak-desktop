const { join, resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

const { getConfig, dev } = require('./webpack.config.base')

const PORT = 5000

const getHtml = (scope, name) => {
  return new HtmlWebpackPlugin({
    title: 'Guildspeak',
    template: 'static/pages/index.html',
    filename: `${name}.html`,
    chunks: [`vendor.${scope}`, name]
  })
}

const applyEntries = (scope, config, entries) => {
  for (const entry of entries) {
    config.entry[entry] = [`./src/renderer/app`]
    config.plugins.push(getHtml(scope, entry))

    if (dev) {
      config.entry[entry].unshift('react-hot-loader/patch')
    }
  }
}

const getBaseConfig = name => {
  const config = {
    plugins: [new HardSourceWebpackPlugin()],

    output: {},
    entry: {},

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

    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            name: `vendor.${name}`,
            test: `vendor.${name}`,
            enforce: true
          }
        }
      }
    }
  }

  config.entry[`vendor.${name}`] = ['react', 'react-dom', 'styled-components']

  return config
}

const appConfig = getConfig(getBaseConfig('app'), {
  target: 'electron-renderer',

  devServer: {
    contentBase: join(__dirname, 'build'),
    port: PORT,
    hot: true,
    inline: true,
    disableHostCheck: true
  }
})

applyEntries('app', appConfig, ['index'])

module.exports = [appConfig]
