const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const mode = process.env.Node_ENV || 'development';

const devMode = mode === 'development'

const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    devtool,
    devServer: {
        devMiddleware: {
            writeToDisk: true
        },
        static: path.resolve(__dirname, 'dist/js'),
        compress: true,
        port: 3000,
        open: true,
        hot: true
    },
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: './js/main.js',
        assetModuleFilename: 'images/[hash][ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        }),
    ],
    module: {
        rules: [
          {
            test: /\.html$/i,
            exclude: /node_modules/,
            loader: "html-loader",
          },
          {
            test: /\.(c||sa||sc)ss$/,
            exclude: /node_modules/,
            use: [
                devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                'sass-loader'
            ],
          },
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                configFile: path.resolve(__dirname, 'babel.config.json')
              }
            }
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/,
            exclude: /node_modules/,
            use: [
                {
                  loader: ImageMinimizerPlugin.loader
                },
              ],
          }
        ],
      },
      optimization: {
        minimize: true,
        minimizer: [
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {

                plugins: [
                  ["gifsicle", { interlaced: true }],
                  ["jpegtran", { progressive: true }],
                  ["optipng", { optimizationLevel: 5 }],
                ],
              },
            },
          }),
        ],
      },
}