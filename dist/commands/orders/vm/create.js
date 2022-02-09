"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../../utils/constants");
const base_command_1 = require("../../../commons/base-command");
class CreateVmOrder extends base_command_1.default {
    async run() {
        const { flags } = await this.parse(CreateVmOrder);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        const request = {
            productType: 'VM',
            productAction: 'ADD',
            productParams: {
                providerId: params.providerId,
                locationId: params.locationId,
                bundleId: params.bundleId,
                cloudType: params.cloudType,
                templateId: params.templateId,
            },
            params: {
                dcId: params.dcId,
                name: params.hostname,
                auth: {
                    ssh: {
                        username: params.username,
                        id: params.sshId,
                    },
                },
                network: {
                    cloudNetworkType: params.cloudNetworkType,
                },
            },
        };
        const response = await publicApiService.post('orders', { items: [request] }, {});
        this.printObject(flags, response.data);
    }
}
exports.default = CreateVmOrder;
CreateVmOrder.description = 'Create vm';
CreateVmOrder.examples = [
    `$ ${constants_1.default.cliName} orders vm create`,
];
CreateVmOrder.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
    providerId: core_1.Flags.integer({ description: 'Provider id from wizard tuple', required: true }),
    locationId: core_1.Flags.integer({ description: 'Location id from wizard tuple', required: true }),
    bundleId: core_1.Flags.integer({ description: 'Bundle id from wizard tuple', required: true }),
    cloudType: core_1.Flags.string({ description: 'Cloud type from wizard tuple', required: true }),
    templateId: core_1.Flags.integer({ description: 'Template id from wizard tuple', required: true }),
    dcId: core_1.Flags.integer({ description: 'DC id from wizard tuple', required: true }),
    sshId: core_1.Flags.integer({ description: 'Ssh key id', required: true }),
    cloudNetworkType: core_1.Flags.string({ description: 'Cloud network type', required: true }),
    username: core_1.Flags.string({ description: 'Username for authorization in VM', required: true }),
    hostname: core_1.Flags.string({ description: 'Hostname of VM', required: true }),
};
CreateVmOrder.args = [];
