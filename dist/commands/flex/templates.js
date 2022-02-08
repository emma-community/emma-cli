"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class Templates extends base_command_1.default {
    async run() {
        const { args, flags } = await this.parse(Templates);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        if (args.id) {
            const response = await publicApiService.get(`flex/templates/${args.id}`, params);
            this.printObject(flags, response.data);
        }
        else {
            const response = await publicApiService.get('flex/templates', params);
            this.printArray(flags, response.data);
        }
    }
}
exports.default = Templates;
Templates.description = 'Get list of templates';
Templates.examples = [
    `$ ${constants_1.default.cliName} flex templates`,
    `$ ${constants_1.default.cliName} flex templates {id}`,
];
Templates.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
    pageNumber: core_1.Flags.integer({ description: 'Page number default 0', required: false }),
    itemCount: core_1.Flags.integer({ description: 'Item count default 5', required: false }),
    sortBy: core_1.Flags.string({ description: 'Sort by field default id', required: false }),
    order: core_1.Flags.string({ description: 'Order direction default ASC', required: false }),
};
Templates.args = [
    { name: 'id', description: 'Id of requested flex', required: false },
];
