const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { features, core, index, root, utils, src } = require('./paths');
const config = {
  mode: 'development',
  entry: index,
  output: {
    path: path.join(root, '/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    compress: true,
    contentBase: src,
    historyApiFallback: true,
    host: '0.0.0.0',
    overlay: true,
    port: 3000
  },
  resolve: {
    alias: {
      features: features,
      core: core,
      utils: utils
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

module.exports = config;
