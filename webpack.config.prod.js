var path = require("path");
var webpack = require("webpack");
var HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    "./src/index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      template: "./index.html",
      inject: "body"
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ["babel"],
      include: path.join(__dirname, "src")
    },
    {test: /\.css$/, loader: "style-loader!css-loader"}
    ],
    noParse: /dist\/ol.js/
  }
};
