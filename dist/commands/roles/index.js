"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class Roles extends base_command_1.default {
    async run() {
        const { args, flags } = await this.parse(Roles);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        if (args.id) {
            const response = await publicApiService.get(`roles/${args.id}`, params);
            this.printObject(flags, response.data);
        }
        else {
            const response = await publicApiService.get('roles', params);
            this.printArray(flags, response.data);
        }
    }
}
exports.default = Roles;
Roles.description = 'Get a list of company roles';
Roles.examples = [
    `$ ${constants_1.default.cliName} roles {id}`,
    `$ ${constants_1.default.cliName} roles`,
];
Roles.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
};
Roles.args = [
    { name: 'id', description: 'Id of requested role', required: false },
];
