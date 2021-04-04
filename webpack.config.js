var path = require("path");
var HtmlWebPackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const { Template } = require("webpack");
module.exports = {

    entry: {
        app: './src/index.js'
    },

    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: '',
        filename: "main.js"
    },
    mode: "development",
    module: {
        rules: [{
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true,
                }
            }]
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                // 'style-loader',
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                    },
                },
                'css-loader',
                "sass-loader",
            ]
        },
        {
            test: /\.(png|svg|jpe?g|gif)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: "imgs",
                    }
                }
            ]
        },
        {
            test: /\.(svg|eot|woff|woff2|ttf)$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "fonts",
                    esModule: false,
                }
            }]
        },
        {
            test:require.resolve('jquery'),
            loader: 'expose-loader',
            options: {
                exposes: ['$','jQuery'],
            }
        },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new HtmlWebPackPlugin({
            filename: "product.html",
            template: "./src/product.html"
        }),
        new HtmlWebPackPlugin({
            filename: "search.html",
            template: "./src/search.html"
        }),
        new HtmlWebPackPlugin({
            filename: "card.html",
            template: "./src/card.html"
        }),
        new HtmlWebPackPlugin({
            filename: "payment.html",
            template: "./src/payment.html"
        }),
        new HtmlWebPackPlugin({
            filename: "contact.html",
            template: "./src/contact.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/style.css"
        }),
        new OptimizeCssAssetsWebpackPlugin({}),
    ],

    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        port: 8080,
        writeToDisk: true,
    },
};