module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        loose: true,
        targets: {
          browsers: ["last 2 versions", "ie >= 8"],
        },
      },
    ],
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
  ],
}
