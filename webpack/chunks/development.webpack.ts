import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';

import { commonConfig } from './common.webpack';

export const development: webpack.Configuration = webpackMerge(commonConfig({ env: 'development' }), {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-dev-server/client',
        'webpack/hot/dev-server'
    ],
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/'
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.html')
        })
    ]
});