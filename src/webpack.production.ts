import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';

import { commonConfig } from './webpack.common';

const production: webpack.Configuration = webpackMerge(commonConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'app', 'index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                minifyJS: true
            }
        })
    ]
});

export =[
    production
];