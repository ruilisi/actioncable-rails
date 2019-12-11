const webpack = require("webpack")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const baseConfig = require("./webpack.base")

module.exports = {
  ...baseConfig,
  mode: "production",
  devtool: "source-map",
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false,
        },
      },
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
}
