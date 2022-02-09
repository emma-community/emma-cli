"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class Tickets extends base_command_1.default {
    async run() {
        const { args, flags } = await this.parse(Tickets);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        if (args.uid) {
            const response = await publicApiService.get(`tickets/${args.uid}`, params);
            this.printObject(flags, response.data);
        }
        else {
            const response = await publicApiService.get('tickets', params);
            this.printArray(flags, response.data);
        }
    }
}
exports.default = Tickets;
Tickets.description = 'Get tickets';
Tickets.examples = [
    `$ ${constants_1.default.cliName} tickets`,
    `$ ${constants_1.default.cliName} tickets {uid}`,
];
Tickets.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
};
Tickets.args = [
    { name: 'uid', description: 'Uid of requested ticket', required: false },
];
