const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 3000;
let publicUrl = `ws://localhost:${port}/ws`;

// Gitpod and Codespaces configurations...

module.exports = {
  entry: ['./src/js/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Ensure this directory exists
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Using shorthand for loaders
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' },
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    port,
    hot: true,
    allowedHosts: 'all',
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'public'), // Change to 'public'
    },
    client: {
      webSocketURL: publicUrl,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      favicon: '4geeks.ico',
      template: 'template.html',
    }),
  ],
};
