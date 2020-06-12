/**
 * Webpack Common Configuration
 */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Where the source code is located. The entry
  // point of the app
  entry: "./src/index.js",
  // What to call the output file and which
  // directory to put in in
  // Use content hash in name for cache busting
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  // Plugins Array
  plugins: [
    // Cleans up the dist directory before new build
    new CleanWebpackPlugin(),
    // Helps manage the HTML file
    new HtmlWebpackPlugin({
      // the file name for the output file
      filename: "index.html",
      // inject JS file into the body tag
      inject: true,
      // the template for the index.html file
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  module: {
    // Set up rules for webpack so it knows what to
    // do with each file it encounters
    rules: [
      {
        // a regular expression webpack checks against
        // the file name.
        // when encountering a .js or .jsx file, use
        // Babel to transform the code.
        test: /\.(js|jsx)$/,
        // Exclude node_modules directory
        exclude: /[\\/]node_modules[\\/]/,
        // which loaders to use handling these files
        // Order matters! Read right to left
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
