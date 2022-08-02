const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.bundle.js',
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            { test: /\\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']  
            },
            { test: /\\.s[as]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']  
            },
            {
                test: /\.(png|jpeg|gif|mp3)$/i,
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]",
                },
            }
        ]
    },
    devServer: {
        port: 3000,
    }
};