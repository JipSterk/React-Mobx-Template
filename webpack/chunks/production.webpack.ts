import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';

import { commonConfig } from './common.webpack';

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

export const production: webpack.Configuration = webpackMerge(commonConfig({ env: 'production' }), {
    output: {
        path: path.resolve('dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(ENV)
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                minifyJS: true
            }
        })
    ]
});