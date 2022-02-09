"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class Vms extends base_command_1.default {
    async run() {
        const { args, flags } = await this.parse(Vms);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        const response = await publicApiService.get(`flex/vms/${args.id}`, params);
        this.printObject(flags, response.data);
    }
}
exports.default = Vms;
Vms.description = 'Get vm details';
Vms.examples = [
    `$ ${constants_1.default.cliName} flex vms {id}`,
];
Vms.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
};
Vms.args = [
    { name: 'id', description: 'Id of requested vm', required: true },
];
