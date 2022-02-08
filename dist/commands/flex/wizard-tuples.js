"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class WizardTuples extends base_command_1.default {
    async run() {
        const { flags } = await this.parse(WizardTuples);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        const response = await publicApiService.get('flex/wizard-tuples', params);
        this.printArray(flags, response.data);
    }
}
exports.default = WizardTuples;
WizardTuples.description = 'Get list of wizard tuples';
WizardTuples.examples = [
    `$ ${constants_1.default.cliName} flex wizard-tuples`,
];
WizardTuples.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
};
WizardTuples.args = [];
