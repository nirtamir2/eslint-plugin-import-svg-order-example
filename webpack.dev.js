const path = require("path");
const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  // Set the mode to development or production
  mode: "development",

  // Control how source maps are generated
  devtool: "inline-source-map",

  // Spin up aa server for quick development
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "/dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
});
