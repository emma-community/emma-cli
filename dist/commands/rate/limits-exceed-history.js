"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class LimitsExceedHistory extends base_command_1.default {
    async run() {
        const { flags } = await this.parse(LimitsExceedHistory);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        const response = await publicApiService.get('rate/limits/exceed/history', params);
        this.printObject(flags, response.data);
    }
}
exports.default = LimitsExceedHistory;
LimitsExceedHistory.description = 'Get current company project payable requests count';
LimitsExceedHistory.examples = [
    `$ ${constants_1.default.cliName} rate limits-exceed-history`,
];
LimitsExceedHistory.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
    startPeriodUnixTimestamp: core_1.Flags.integer({ description: 'Start period for limits search (in unix timestamp)', required: true }),
    endPeriodUnixTimestamp: core_1.Flags.integer({ description: 'End period for limits search (in unix timestamp)', required: true }),
    companyLimits: core_1.Flags.boolean({ description: 'Include company exceed history', required: false }),
};
LimitsExceedHistory.args = [];
