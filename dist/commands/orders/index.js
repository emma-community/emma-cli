"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class Orders extends base_command_1.default {
    async run() {
        const { args, flags } = await this.parse(Orders);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        if (args.id) {
            const response = await publicApiService.get(`orders/${args.id}`, params);
            this.printObject(flags, response.data);
        }
        else {
            const response = await publicApiService.get('orders', params);
            this.printArray(flags, response.data);
        }
    }
}
exports.default = Orders;
Orders.description = 'Get list of current company orders';
Orders.examples = [
    `$ ${constants_1.default.cliName} orders`,
    `$ ${constants_1.default.cliName} orders {id}`,
];
Orders.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
};
Orders.args = [
    { name: 'id', description: 'Id of requested order', required: false },
];
