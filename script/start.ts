import * as express from 'express';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';

import developmentConfigs = require('../src/webpack.development');
import productionConfigs = require('../src/webpack.production');

let config: webpack.Configuration[];

if(process.env.NODE_ENV === 'development') {
    config = developmentConfigs;
}
else if(process.env.NODE_ENV === 'production') {
    config = productionConfigs;
}
else {
    console.error(`Couldn't load configuration for type: ${process.env.NODE_ENV}`);
    process.exit(1);
}

const server = express();
const compiler = webpack(config);
const port = Number.parseInt(process.env.PORT) || 3000;

server.use(webpackDevMiddleware(compiler, {
    publicPath: '/',
    logLevel: 'info',
}));

server.use(webpackHotMiddleware(compiler));

server.listen(port, 'localhost', (error?: Error): void => {
    if (error) {
        console.log('error');
        process.exit(1);
        return;
    }

    console.log(`Server running at http://localhost:${port}`);
});