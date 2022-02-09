"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class Locations extends base_command_1.default {
    async run() {
        const { args, flags } = await this.parse(Locations);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        if (args.id) {
            const response = await publicApiService.get(`flex/locations/${args.id}`, params);
            this.printObject(flags, response.data);
        }
        else {
            const response = await publicApiService.get('flex/locations', params);
            this.printArray(flags, response.data);
        }
    }
}
exports.default = Locations;
Locations.description = 'Get list of locations';
Locations.examples = [
    `$ ${constants_1.default.cliName} flex locations`,
    `$ ${constants_1.default.cliName} flex locations {id}`,
];
Locations.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
    pageNumber: core_1.Flags.integer({ description: 'Page number default 0', required: false }),
    itemCount: core_1.Flags.integer({ description: 'Item count default 5', required: false }),
    sortBy: core_1.Flags.string({ description: 'Sort by field default id', required: false }),
    order: core_1.Flags.string({ description: 'Order direction default ASC', required: false }),
};
Locations.args = [
    { name: 'id', description: 'Id of requested flex', required: false },
];
