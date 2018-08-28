const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports  = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.js', 
    path: path.resolve(__dirname, 'dist')
  }, 

  resolve: {
    extensions: ['.js', '.jsx','.ts', '.tsx'],
  },

  devtool: 'source-map', 

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader" 
      },

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
        test: /\.(woff(2)?|ttf|eot|png|svg|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
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