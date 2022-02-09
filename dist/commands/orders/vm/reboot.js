"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../../utils/constants");
const base_command_1 = require("../../../commons/base-command");
class RebootVmOrder extends base_command_1.default {
    async run() {
        const { flags } = await this.parse(RebootVmOrder);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        const request = {
            productType: 'VM',
            productAction: 'ACTION',
            productParams: {
                productId: params.productId,
                actionType: 'RESTART',
            },
            params: {},
        };
        const response = await publicApiService.post('orders', { items: [request] }, {});
        this.printObject(flags, response.data);
    }
}
exports.default = RebootVmOrder;
RebootVmOrder.description = 'Reboot vm';
RebootVmOrder.examples = [
    `$ ${constants_1.default.cliName} orders vm reboot`,
];
RebootVmOrder.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
    productId: core_1.Flags.integer({ description: 'Product id of vm', required: true }),
};
RebootVmOrder.args = [];
