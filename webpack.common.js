const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    // Name of the assets (optional and will be hash)
    assetModuleFilename: "images/[name][ext][query]",
  },
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              plugins: [
                isDevelopment && require.resolve("react-refresh/babel"),
              ].filter(Boolean),
            },
          },
        ],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Nir Title",
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin(),
  ].filter(Boolean),
};
