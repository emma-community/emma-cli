"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class CheckSpotPrice extends base_command_1.default {
    async run() {
        const { flags } = await this.parse(CheckSpotPrice);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        const response = await publicApiService.get('orders/check-spot-price', params);
        this.printArray(flags, response.data);
    }
}
exports.default = CheckSpotPrice;
CheckSpotPrice.description = 'Check spot price';
CheckSpotPrice.examples = [
    `$ ${constants_1.default.cliName} orders check-spot-price`,
];
CheckSpotPrice.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
    providerId: core_1.Flags.integer({ description: 'Provider id', required: true }),
    bundleId: core_1.Flags.integer({ description: 'Bundle id', required: true }),
    dcId: core_1.Flags.integer({ description: 'DC id', required: true }),
    templateId: core_1.Flags.integer({ description: 'Template id', required: true }),
};
CheckSpotPrice.args = [];
