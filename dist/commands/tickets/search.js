"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class Search extends base_command_1.default {
    async run() {
        const { flags } = await this.parse(Search);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        const response = await publicApiService.get('tickets/search/{term}', params);
        this.printArray(flags, response.data);
    }
}
exports.default = Search;
Search.description = 'Get all ticket by search term';
Search.examples = [
    `$ ${constants_1.default.cliName} tickets search`,
];
Search.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
    term: core_1.Flags.string({ description: 'Search term', required: true }),
};
Search.args = [];
