const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, '../source/server/server.jsx'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../built/server'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [
                path.resolve(__dirname, '../public')
            ],
              sourceMap: true
            }
          }
        ],
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?name=[path][name].[ext]limit=10000&mimetype=application/font-woff" },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader",
        options:{
          name:'[path][name].[ext]',
          publicPath: '/'
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: "file-loader",
        options:{
          name:'[path][name].[ext]',
          publicPath: '/'
        }
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        use: 'json-loader',
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['latest-minimal', 'react'],
          },
        },
        exclude: /(node_modules)/,
      },
    ],
  },
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BROWSER': false,
    }),
  ],
};
