"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class PermissionSets extends base_command_1.default {
    async run() {
        const { args, flags } = await this.parse(PermissionSets);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        if (args.id) {
            const response = await publicApiService.get(`permissionSets/${args.id}`, params);
            this.printObject(flags, response.data);
        }
        else {
            const response = await publicApiService.get('permissionSets', params);
            this.printArray(flags, response.data);
        }
    }
}
exports.default = PermissionSets;
PermissionSets.description = 'Get list of current company permission set';
PermissionSets.examples = [
    `$ ${constants_1.default.cliName} permissionSets {id}`,
    `$ ${constants_1.default.cliName} permissionSets`,
];
PermissionSets.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
};
PermissionSets.args = [
    { name: 'id', description: 'Id of requested permissionSet', required: false },
];
