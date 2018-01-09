import * as path from 'path';

const _root = path.resolve(__dirname, '../..');

export const root = (...args: string[]): string => path.join(...[_root].concat(args));