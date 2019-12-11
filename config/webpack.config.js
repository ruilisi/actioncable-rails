var path = require('path')
const ROOT_DIR = path.resolve(__dirname, '..')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: 'index.js',
    library: 'actioncable-rails',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this",
    path: path.resolve(ROOT_DIR, 'build')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        include: [path.resolve(ROOT_DIR, 'lib')],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false
        }
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  stats: {
    colors: true
  },
  mode: 'production',
  devtool: 'source-map'
}
