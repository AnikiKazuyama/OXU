const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    filename: 'index.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    historyApiFallback: true
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['last 1 version', 'not dead', '> 0.2%']
                })
              ],
              sourceMap: true
            }
          }
        ]
      },

      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },

      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },

      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env'
            ],
            plugins: [
              '@babel/plugin-proposal-function-bind',
              '@babel/plugin-proposal-export-default-from',
              '@babel/plugin-proposal-logical-assignment-operators',
              ['@babel/plugin-proposal-optional-chaining', { loose: false }],
              ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
              ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
              '@babel/plugin-proposal-do-expressions',
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              '@babel/plugin-proposal-function-sent',
              '@babel/plugin-proposal-export-namespace-from',
              '@babel/plugin-proposal-numeric-separator',
              '@babel/plugin-proposal-throw-expressions',
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-syntax-import-meta',
              ['@babel/plugin-proposal-class-properties', { loose: false }],
              '@babel/plugin-proposal-json-strings'
            ]
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]

};
