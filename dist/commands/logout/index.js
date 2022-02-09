"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class Logout extends base_command_1.default {
    async run() {
        await this.getContext().stateService.removeState();
        await this.printObject({}, 'Successfully logout');
    }
}
exports.default = Logout;
Logout.description = 'Log out from emma platform';
Logout.examples = [
    `$ ${constants_1.default.cliName} logout`,
];
Logout.flags = {};
Logout.args = [];
