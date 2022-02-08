"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class Descriptions extends base_command_1.default {
    async run() {
        const { flags } = await this.parse(Descriptions);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        const response = await publicApiService.get('products/descriptions', params);
        this.printArray(flags, response.data);
    }
}
exports.default = Descriptions;
Descriptions.description = 'Get list of current company products descriptions';
Descriptions.examples = [
    `$ ${constants_1.default.cliName} products descriptions`,
];
Descriptions.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
};
Descriptions.args = [];
