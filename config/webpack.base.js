const path = require("path")

const ROOT_DIR = path.resolve(__dirname, "..")

module.exports = {
  entry: "./lib/index.js",
  output: {
    filename: "index.js",
    library: "actioncable-rails",
    libraryTarget: "umd",
    globalObject: "typeof self !== 'undefined' ? self : this",
    path: path.resolve(ROOT_DIR, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: [path.resolve(ROOT_DIR, "lib")],
        exclude: /(node_modules)/,
        use: ["babel-loader"],
      },
    ],
  },
  stats: {
    colors: true,
  },
}
