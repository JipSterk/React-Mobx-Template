const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.argv.indexOf('-p') >= 0;

const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');

module.exports = {
    context: sourcePath,
    entry: {
        main: './index.tsx',
        vendor: [
            'react',
            'react-dom',
        ]
    },
    output: {
        path: outPath,
        publicPath: '/',
        filename: 'bundle.js'
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        mainFields: ['main']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['awesome-typescript-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['to-string-loader', 'style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(jpe?g|png)$/,
                use: 'file-loader',
                include: [path.join(__dirname, './src/images')]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js',
            minChunks: Infinity
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        contentBase: sourcePath,
        hot: true,
        stats: {
            warnings: false
        },
    },
    node: {
        fs: 'empty',
        net: 'empty'
    }
};
