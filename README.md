# React-Mobx-Template

## Requirements

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/)
* [Visual Studio Code](https://code.visualstudio.com/)
    * [Typescript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero)
    * [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

## To Get Started

* `yarn global add ts-node typescript` to install ts-node and typescript globally

Use Visual Studio Code's built in terminal (powershell) by pressing (<kbd>CTRL</kbd> + <kbd>`</kbd>), to use the following commands
* `yarn` to install the npm dependencies required for the project
* `yarn upgrade --latest` to upgrade the packages to their latest versions
* `yarn start` to compile and run the code
* `yarn start:prod` to compile and run the code in production mode
* `yarn build` to compile and build the code
* `yarn build:prod` to compile and build the code in production mode

this will open a new window in Chrome
* or open preferred browser and browse to `http://localhost:3000`

## Debugging

* Pressing F5 in Visual Studio Code will give you an option to select an environment
* select Chrome this will generate a .vscode folder at the root of your directory
* Change `url` in to 3000 (default debugging port)
* for added debug support please download React Developer Tools from the chrome store