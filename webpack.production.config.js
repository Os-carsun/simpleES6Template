var Path = require("path");
var webpack = require("webpack");
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: {
    bundle: [
      Path.resolve(__dirname, 'src/js/index.js'),
      Path.resolve(__dirname, 'src/index.html'),
    ]
  },
  output: {
      path: Path.join(__dirname, 'build'),
      filename: "/src/bundle.js",
      publicPath: "/src",
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },  
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(png|html)$/, loader: "file?name=[path][name].[ext]&context=./" },
    ]
  },
  plugin: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ]
};
