'use strict';
var webpack = require('webpack'),
path = require('path');

var APP = __dirname;

module.exports = {
  context: APP,
  entry: {
    app: './index.js'
  },
  output: {
    path: APP,
    filename: 'bundle.js'
  },
  module: {
   rules: [
     {
       test: /\.scss$/,
       use: [
         "style-loader",
         "css-loader",
         "sass-loader"
       ]
     },
     {
       test: /\.jade/,
       use: [
         "jade-loader"
       ]
     },
     {
       test: /\.js$/,
       use: [
         "babel-loader",
         "jshint-loader"
       ],
       exclude: /node_modules/
     }
   ]
 }
};
