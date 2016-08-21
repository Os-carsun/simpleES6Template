var Path = require("path");
var webpack = require("webpack");
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    "./index.html",
    "./index.js",
  ],
  output: {
      path: Path.join(__dirname, 'build'),
      filename: "bundle.js",
      publicPath: "/",
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },  
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(png|html)$/, loader: "file?name=[path][name].[ext]&context=./" },
    ]
  },
  plugin: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};