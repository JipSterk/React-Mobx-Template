import chalk from 'chalk';
import * as commandLineArgs from 'command-line-args';
import * as fs from 'fs-extra';

import { build, startDevServer } from './webpack-runner';

const settingsFile = './webpack-settings.json';
const data: { env: string, build: boolean, hostname: string, port: number } = JSON.parse(
    fs.existsSync(settingsFile) ?
    fs.readFileSync(settingsFile).toString() :
    '{ "hostname": "localhost", "port": 3000, "env": "dev", "build": false }'
);

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
        defaultValue: data.hostname
    },
    {
        name: 'port',
        alias: 'p',
        type: Number,
        defaultValue: data.port
    }
]);

console.log(chalk.green.bold("\n#~~~~#~~~~# Options #~~~~#~~~~#"));
for (const option in options) {
    console.log(chalk.cyan.bold(`${option}: ${options[option]}`));
}
console.log(chalk.green.bold("\n#~~~~#~~~~#~~~~#~~~~#~~~~#~~~~#\n"));

fs.writeFileSync(settingsFile, JSON.stringify(data, null, 4));

if (options.build) {
    if (fs.existsSync('./dist')) {
        fs.removeSync('./dist');
    }

    build(options);
}
else {
    startDevServer(options);
}