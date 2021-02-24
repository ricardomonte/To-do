const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtrarctPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html',
    inject: 'body',
  }),
  new MiniCssExtrarctPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        resolve: {
          extensions: ['*', '.js'],
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtrarctPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtrarctPlugin.loader, 'css-loader'],
      },
    ],
  },
};