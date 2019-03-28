const path = require('path');
const sass = require('sass')
const autoprefixer = require('autoprefixer')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  context: path.resolve(__dirname, 'src'),

  mode: 'development',
  entry: [
    './index.js',
    './styles/main.sass',
  ],

  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    // hot: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     plugins: () => autoprefixer
          //   }
          // },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: sass
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader?attrs=false',
          },
          {
            loader: 'pug-html-loader',
            options: {
              basedir: './markup',
              pretty: true
            }
          }
        ],
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    // new ExtractTextPlugin({
    //   filename: './css/main.css',
    //   allChunks: true,
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './markup/index.pug'
    })
  ],

  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
};
