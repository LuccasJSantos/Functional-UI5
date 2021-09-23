const path = require('path')

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'L.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/
    }, {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            'babel-preset-minify',
            '@babel/preset-env'
          ],
          plugins: [
            '@babel/plugin-transform-arrow-functions',
            '@babel/plugin-transform-destructuring',
            '@babel/plugin-transform-parameters',
            '@babel/plugin-transform-spread',
            '@babel/plugin-transform-template-literals'
          ]
        }
      }
    }]
  }
}
