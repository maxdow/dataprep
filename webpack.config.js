var path = require("path");
var webpack = require("webpack");

module.exports = {
  //devtool: "eval",
  devtool : "source-map",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src/index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ["react-hot", "babel"],
      include: path.join(__dirname, "src")
    },
    {test: /\.css$/, loader: "style-loader!css-loader"},
    {test: /\.png$/, loader: "file-loader?name=[name].[ext]" },
    {test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=fonts.[ext]" }
    ],
    noParse: /dist\/ol.js/
  }
};
