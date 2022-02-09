"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../../utils/constants");
const base_command_1 = require("../../../commons/base-command");
class StartVmOrder extends base_command_1.default {
    async run() {
        const { flags } = await this.parse(StartVmOrder);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        const request = {
            productType: 'VM',
            productAction: 'ACTION',
            productParams: {
                productId: params.productId,
                actionType: 'START',
            },
            params: {},
        };
        const response = await publicApiService.post('orders', { items: [request] }, {});
        this.printObject(flags, response.data);
    }
}
exports.default = StartVmOrder;
StartVmOrder.description = 'Start vm';
StartVmOrder.examples = [
    `$ ${constants_1.default.cliName} orders vm start`,
];
StartVmOrder.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
    productId: core_1.Flags.integer({ description: 'Product id of vm', required: true }),
};
StartVmOrder.args = [];
