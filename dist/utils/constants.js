"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    defaultBaseUrl: 'https://api.emma.ms',
    defaultAvatarCode: 'emma',
    cliName: 'emmacli',
    stateFilePath: `${require('os').homedir()}${require('path').sep}.emma.json`, // eslint-disable-line unicorn/prefer-module
};
