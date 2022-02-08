"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../../utils/constants");
const base_command_1 = require("../../../commons/base-command");
class DeleteVmOrder extends base_command_1.default {
    async run() {
        const { flags } = await this.parse(DeleteVmOrder);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        const request = {
            productType: 'VM',
            productAction: 'DELETE',
            productParams: {
                productId: params.productId,
            },
            params: {},
        };
        const response = await publicApiService.post('orders', { items: [request] }, {});
        this.printObject(flags, response.data);
    }
}
exports.default = DeleteVmOrder;
DeleteVmOrder.description = 'Delete vm';
DeleteVmOrder.examples = [
    `$ ${constants_1.default.cliName} orders vm delete`,
];
DeleteVmOrder.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
    productId: core_1.Flags.integer({ description: 'Product id of vm', required: true }),
};
DeleteVmOrder.args = [];
