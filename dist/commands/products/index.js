"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class Products extends base_command_1.default {
    async run() {
        const { flags } = await this.parse(Products);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        const response = await publicApiService.get('products', params);
        this.printArray(flags, response.data);
    }
}
exports.default = Products;
Products.description = 'Get list of current project products';
Products.examples = [
    `$ ${constants_1.default.cliName} products`,
];
Products.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
};
Products.args = [];
