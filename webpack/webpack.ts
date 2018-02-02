import chalk from 'chalk';
import * as commandLineArgs from 'command-line-args';
import * as fs from 'fs-extra';

import { build, startDevServer } from './webpack-runner';

const options: { env: string, build: boolean, hostname: string, port: number } = commandLineArgs([
    {
        name: 'env',
        alias: 'e',
        type: String,
        defaultValue: 'dev'
    },
    {
        name: 'build',
        alias: 'b',
        type: Boolean,
        defaultValue: false
    },
    {
        name: 'hostname',
        alias: 'n',
        type: String,
        defaultValue: 'localhost'
    },
    {
        name: 'port',
        alias: 'p',
        type: Number,
        defaultValue: 3000
    }
]);

console.log(chalk.green.bold('\n#~~~~#~~~~# Options #~~~~#~~~~#'));
for (const option in options) {
    console.log(chalk.cyan.bold(`${option}: ${options[option]}`));
}
console.log(chalk.green.bold('\n#~~~~#~~~~#~~~~#~~~~#~~~~#~~~~#\n'));

if (options.build) {
    if (fs.existsSync('./dist')) {
        fs.removeSync('./dist');
    }

    build(options);
}
else {
    startDevServer(options);
}