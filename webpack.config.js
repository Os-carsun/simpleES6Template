var Path = require("path");
var webpack = require("webpack");
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    bundle:[
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      './src/js/index.js',
      './src/index.html',
    ]
  },
  output: {
      path: Path.join(__dirname, 'build'),
      filename: "bundle.js",
      publicPath: "/src",
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", include: Path.join(__dirname, 'src/') },  
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(png|html)$/, loader: "file?name=[path][name].[ext]&context=./" },
    ]
  },
  plugin: [
    new webpack.HotModuleReplacementPlugin(),
    WebpackNotifierPlugin
  ]
};
