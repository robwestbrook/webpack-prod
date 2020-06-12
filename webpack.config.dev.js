/**
 * Webpack Development Configuration
 */
const merge = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
  // Development mode
  mode: "development",
  // includes source map at the end of each JS file
  devtool: "inline-source-map",
  devServer: {
    // Where dev server will find content
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        // Handle files with a .css extension
        test: /\.css$/,

        // css-loader interprets and resolves CSS files
        // makes 'import ./index.css' work.
        // style-loader injects the CSS into the DOM
        // inside a 'style' tag
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
