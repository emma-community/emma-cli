"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../utils/constants");
// eslint-disable-next-line unicorn/prefer-module
const fs = require('fs');
class StateService {
    constructor(context) {
        this.context = context;
    }
    envVarsAreSet() {
        return process.env.EMMA_CLIENT_ID != null && process.env.EMMA_CLIENT_SECRET != null;
    }
    stateFileExists() {
        return fs.existsSync(constants_1.default.stateFilePath);
    }
    async getState() {
        // check if all required env vars are set up
        if (this.envVarsAreSet()) {
            const baseUrl = process.env.EMMA_BASE_URL || constants_1.default.defaultBaseUrl;
            const avatarCode = process.env.EMMA_AVATAR_CODE || constants_1.default.defaultAvatarCode;
            const clientId = process.env.EMMA_CLIENT_ID;
            const clientSecret = process.env.EMMA_CLIENT_SECRET;
            return {
                baseUrl,
                avatarCode,
                clientId,
                clientSecret,
            };
        }
        if (this.stateFileExists()) {
            const fileContent = fs.readFileSync(constants_1.default.stateFilePath);
            return JSON.parse(fileContent);
        }
        throw new Error('Can not authorize you in emma platform. Please use login command or set the following env variables: EMMA_CLIENT_ID, EMMA_CLIENT_SECRET, EMMA_BASE_URL - optional, EMMA_AVATAR_CODE - optional');
    }
    async setState(clientId, clientSecret, baseUrlOpt, avatarCodeOpt) {
        const baseUrl = baseUrlOpt || constants_1.default.defaultBaseUrl;
        const avatarCode = avatarCodeOpt || constants_1.default.defaultAvatarCode;
        const state = {
            baseUrl,
            avatarCode,
            clientId,
            clientSecret,
        };
        state.token = await this.context.authorizationService.getTokenForState(state);
        // clear out clientId/clientSecret from the state
        state.clientId = undefined;
        state.clientSecret = undefined;
        // save state
        fs.writeFileSync(constants_1.default.stateFilePath, JSON.stringify(state));
        return state;
    }
    async removeState() {
        if (this.stateFileExists()) {
            fs.unlinkSync(constants_1.default.stateFilePath);
        }
    }
}
exports.default = StateService;
