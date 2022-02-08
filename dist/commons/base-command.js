"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
// eslint-disable-next-line node/no-extraneous-import
const cli_ux_1 = require("cli-ux");
const context_service_1 = require("../services/context-service");
// eslint-disable-next-line unicorn/prefer-module
const yaml = require('js-yaml');
class BaseCommand extends core_1.Command {
    init() {
        this.contextService = new context_service_1.default();
        return super.init();
    }
    getContext() {
        return this.contextService;
    }
    getPublicApiService() {
        var _a;
        return (_a = this.contextService) === null || _a === void 0 ? void 0 : _a.publicApiService;
    }
    printArray(flags, content) {
        if (flags.json) {
            console.log(JSON.stringify(content, null, 2));
        }
        else if (flags.yaml) {
            console.log(yaml.dump(content));
        }
        else {
            // search for suitable data
            let data = [];
            if (Array.isArray(content)) {
                data = content;
            }
            else if (Array.isArray(content.content)) {
                data = content.content;
            }
            else if (Array.isArray(content.items)) {
                data = content.items;
            }
            else if (Array.isArray(content.projectApps)) {
                data = content.projectApps;
            }
            else if (Array.isArray(content.projectKubernetes)) {
                data = content.projectKubernetes;
            }
            else {
                throw new TypeError('Can not render response as a table. Try to use --json/--yaml flags');
            }
            const headerOptions = this.getTableHeaders(data);
            cli_ux_1.cli.table(data, headerOptions, { printLine: console.log });
        }
    }
    printObject(flags, content) {
        if (flags.json) {
            console.log(JSON.stringify(content, null, 2));
        }
        else if (flags.yaml) {
            console.log(yaml.dump(content));
        }
        else {
            console.log(content);
        }
    }
    getTableHeaders(content) {
        const keys = {};
        for (const item of content) {
            for (const key of Object.keys(item)) {
                keys[key] = { header: key };
            }
        }
        return keys;
    }
    getParamsMap(flags) {
        const params = {};
        for (const key of Object
            .keys(flags)
            .filter(key => key !== 'json')
            .filter(key => key !== 'yaml')) {
            params[key] = flags[key];
        }
        return params;
    }
}
exports.default = BaseCommand;
