"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class Comments extends base_command_1.default {
    async run() {
        const { args, flags } = await this.parse(Comments);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        const response = await publicApiService.get(`tickets/${args.uid}/comments`, params);
        this.printArray(flags, response.data);
    }
}
exports.default = Comments;
Comments.description = 'Get ticket comments by ticket uid';
Comments.examples = [
    `$ ${constants_1.default.cliName} tickets comments {uid}`,
];
Comments.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
};
Comments.args = [
    { name: 'uid', description: 'Uid of requested ticket', required: true },
];
