const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports  = {
  entry: './src/index.jsx',
  output: {
    filename: 'index.js', 
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  }, 

  resolve: {
    extensions: ['.js', '.jsx','.ts', '.tsx'],
  },

  devServer: {
    historyApiFallback: true,
  },

  devtool: 'source-map', 

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
            'style-loader',  // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
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
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: { 
          "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
          "baseUrl": "types",
          "typeRoots": ["types"],
          "rules": {
            "max-line-length": { 
              "options": [120]
            },
            "no-console": false
          },
          "linterOptions": {
            "exclude": [
              "config/**/*.js",
              "node_modules/**/*.ts",
              "coverage/lcov-report/*.js"
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
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],

};