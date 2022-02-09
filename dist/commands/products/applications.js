"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class Applications extends base_command_1.default {
    async run() {
        const { args, flags } = await this.parse(Applications);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        if (args.id) {
            const response = await publicApiService.get(`products/applications/${args.id}`, params);
            this.printObject(flags, response.data);
        }
        else {
            const response = await publicApiService.get('products/applications', params);
            this.printArray(flags, response.data);
        }
    }
}
exports.default = Applications;
Applications.description = 'Get list of current company applications';
Applications.examples = [
    `$ ${constants_1.default.cliName} products applications`,
    `$ ${constants_1.default.cliName} products applications {id}`,
];
Applications.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
};
Applications.args = [
    { name: 'id', description: 'Id of requested product', required: false },
];
