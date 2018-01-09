import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';

import { root } from '../helpers/helpers';
import { commonConfig } from './common.webpack';

export const development: webpack.Configuration = webpackMerge(commonConfig({ env: 'development' }), {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-dev-server/client',
        'webpack/hot/dev-server'
    ],
    output: {
        path: root('dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/'
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: root('src', 'index.html')
        })
    ]
});