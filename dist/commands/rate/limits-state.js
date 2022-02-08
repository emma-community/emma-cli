"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class LimitsState extends base_command_1.default {
    async run() {
        const { flags } = await this.parse(LimitsState);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        const response = await publicApiService.get('rate/limits/state', params);
        this.printObject(flags, response.data);
    }
}
exports.default = LimitsState;
LimitsState.description = 'Get company rate limit state';
LimitsState.examples = [
    `$ ${constants_1.default.cliName} rate limits-state`,
];
LimitsState.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
};
LimitsState.args = [];
