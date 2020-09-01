const path = require('path')

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'lutil.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/
    }]
  }
}
