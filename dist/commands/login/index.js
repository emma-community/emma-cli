"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class Login extends base_command_1.default {
    async run() {
        const { flags } = await this.parse(Login);
        const state = await this.getContext().stateService
            .setState(flags.clientId, flags.clientSecret, flags.baseUrl, flags.avatarCode);
        await this.printObject({}, `Successfully login in ${state.baseUrl} instance`);
    }
}
exports.default = Login;
Login.description = 'Login in emma platform';
Login.examples = [
    `$ ${constants_1.default.cliName} login`,
];
Login.flags = {
    clientId: core_1.Flags.string({ description: 'Service App client id', required: true }),
    clientSecret: core_1.Flags.string({ description: 'Service App client secret', required: true }),
    baseUrl: core_1.Flags.string({ description: 'Base url for emma platform instance', required: false }),
    avatarCode: core_1.Flags.string({ description: 'Base avatar code in emma platform instance', required: false }),
};
Login.args = [];
