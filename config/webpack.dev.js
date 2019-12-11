const path = require("path")
const webpack = require("webpack")
const baseConfig = require("./webpack.base")


const ROOT_DIR = path.resolve(__dirname, "..")


module.exports = {
  ...baseConfig,
  mode: "development",
  devServer: {
    disableHostCheck: true,
    progress: true,
    proxy: {
      "/api/*": {
        target: "http://0.0.0.0:9000",
        changeOrigin: true,
        secure: false,
      },
    },
    host: "0.0.0.0",
    contentBase: path.join(ROOT_DIR, "./"),
    publicPath: "/dist/",
    hot: false,
    inline: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
}
