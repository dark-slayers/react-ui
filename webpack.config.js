var webpack = require("webpack");
var path = require('path');
var config = {
  entry: {
    vendor: ["jquery", "react", 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: "[name].bundle.js",
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: "/vendor.bundle.js"
    })
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', {
              modules: false
            }],
            ['stage-0'],
            ['react']
          ],
          plugins: ['syntax-dynamic-import']
        }
      }]
    }, {
      test: /\.css$/,
      use: [{
          loader: 'style-loader',
          options: {
          }
        },{
            loader: 'css-loader',
            options: {
            }
          }
      ]
    }]
  }
}
module.exports = config;
