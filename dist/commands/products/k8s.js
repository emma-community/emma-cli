"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class K8s extends base_command_1.default {
    async run() {
        const { args, flags } = await this.parse(K8s);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        if (args.id) {
            const response = await publicApiService.get(`products/k8s/${args.id}`, params);
            this.printObject(flags, response.data);
        }
        else {
            const response = await publicApiService.get('products/k8s', params);
            this.printArray(flags, response.data);
        }
    }
}
exports.default = K8s;
K8s.description = 'Get list of current company k8s clusters';
K8s.examples = [
    `$ ${constants_1.default.cliName} products k8s`,
    `$ ${constants_1.default.cliName} products k8s {id}`,
];
K8s.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
};
K8s.args = [
    { name: 'id', description: 'Id of requested product', required: false },
];
