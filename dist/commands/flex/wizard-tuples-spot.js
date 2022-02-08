"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class WizardTuplesSpot extends base_command_1.default {
    async run() {
        const { flags } = await this.parse(WizardTuplesSpot);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        const response = await publicApiService.get('flex/wizard-tuples-spot', params);
        this.printArray(flags, response.data);
    }
}
exports.default = WizardTuplesSpot;
WizardTuplesSpot.description = 'Get list of spot wizard tuples';
WizardTuplesSpot.examples = [
    `$ ${constants_1.default.cliName} flex wizard-tuples-spot`,
];
WizardTuplesSpot.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
    itemCount: core_1.Flags.integer({ description: 'Return items count default 10000', required: false }),
};
WizardTuplesSpot.args = [];
