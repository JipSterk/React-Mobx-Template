import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';

import { development } from './chunks/development.webpack';
import { production } from './chunks/production.webpack';

let compiler: webpack.Compiler;
let server: WebpackDevServer;

export const startDevServer = (options: { env: string, build: boolean, hostname: string, port: number }): void => {
    if (options.env === 'dev') {
        compiler = webpack(development);
    }
    else if (options.env === 'prod') {
        compiler = webpack(production);
    }
    else {
        options.env = 'dev';
        compiler = webpack(development);
    }

    server = new WebpackDevServer(compiler, {
        stats: {
            colors: true
        },
        hot: true,
        inline: true,
        publicPath: '/'
    });

    server.listen(options.port, options.hostname, () => {
        console.log(`\nStarting server on http://${options.hostname}:${options.port} in configuration: ${options.env}`)
    });
}

export const stopDevServer = (): void => {
    if (server) {
        server.close();
    }
}

export const build = (options: { env: string, build: boolean, hostname: string, port: number }): void => {
    if (options.env === 'dev') {
        compiler = webpack(development);
    }
    else if (options.env === 'prod') {
        compiler = webpack(production);
    }
    else {
        options.env = 'dev';
        compiler = webpack(development);
    }

    compiler.run((error: Error, status: webpack.Stats) => {
        if (status) {
            console.log(status);
        }
        const info = status.toJson();
        if (status.hasErrors()) {
            console.error(info.error);
            process.exit(1);
        }
        if (status.hasWarnings()) {
            console.warn(info.warnings);
        }
        if (error) {
            console.error(error);
            process.exit(1);
        }
    });
}