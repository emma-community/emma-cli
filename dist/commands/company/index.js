"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class Company extends base_command_1.default {
    async run() {
        const { flags } = await this.parse(Company);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        const response = await publicApiService.get('company', params);
        this.printObject(flags, response.data);
    }
}
exports.default = Company;
Company.description = 'Get company information';
Company.examples = [
    `$ ${constants_1.default.cliName} company`,
];
Company.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
};
Company.args = [];
