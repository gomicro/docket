const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
}

const GH_URL = process.env.GH_URL
const TR_URL = process.env.TR_URL
const GIT_COMMIT_HASH = process.env.GIT_COMMIT_HASH

module.exports = {
  entry: {
    main: path.join(PATHS.src, 'index.js'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.src + '/index.ejs',
      title: 'Docket',
    }),
    new webpack.DefinePlugin({
      GH_URL: JSON.stringify(GH_URL),
      TR_URL: JSON.stringify(TR_URL),
      GIT_COMMIT_HASH: JSON.stringify(GIT_COMMIT_HASH),
    }),
  ],

  resolve: {
    extensions: ['.js'],
    modules: [PATHS.src, 'node_modules'],
  },

  module: {
    rules: [
      {
        test: [/\.js$/],
        exclude: [/node_modules/, /\.story.js$/, /\.test.js$/],
        loader: 'babel-loader',
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
  },

  output: {
    path: PATHS.dist,
  },
}
