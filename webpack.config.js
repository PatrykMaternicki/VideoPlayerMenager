var path = require('path');

module.exports = {
  entry: './JS/app.js',
  output: {
    filename: 'client/videoMenager.min.js'
  },
  devtool: 'inline-source-map',
  module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
}
