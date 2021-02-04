'use strict'

const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'production',
  entry: { 'app': './src/Index.bs.js' },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].min.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Rescript React Template',
    description: 'Rescript React Template',
    filename: 'index.html',
    template: 'template/index.html',
    noscript: 'For convenient, please enable javascript, thank you!'
  }), new MiniCssExtractPlugin()]
}