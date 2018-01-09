import * as webpack from 'webpack';

export const commonConfig = (options: { env: string }): webpack.Configuration => {
    return {
        entry: [
            './src/index.tsx'
        ],
        resolve: {
            extensions: [
                '.js',
                '.ts',
                '.tsx'
            ]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'awesome-typescript-loader'
                },
                {
                    test: /\.scss$/,
                    use: ['to-string-loader', 'style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
                },
                {
                    test: /\.html$/,
                    use: 'html-loader'
                },
                {
                    test: /\.(jpe?g|png)$/,
                    use: 'file-loader',
                },
                {
                    test: /\.json$/,
                    use: 'json-loader'
                }
            ]
        }
    }
}