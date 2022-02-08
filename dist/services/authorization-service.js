"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../utils/constants");
class AuthorizationService {
    constructor(context) {
        this.context = context;
    }
    async getToken() {
        const state = await this.context.stateService.getState();
        if (state.clientId != null && state.clientSecret != null) {
            return this.getTokenForState(state);
        }
        if (state.token == null) {
            throw new Error('Can not authorize you in emma platform. Please use login command or set the following env variables: EMMA_CLIENT_ID, EMMA_CLIENT_SECRET, EMMA_BASE_URL - optional, EMMA_AVATAR_CODE - optional');
        }
        // prepare token refresh request
        const request = {
            refreshToken: state.token.refresh_token,
        };
        try {
            return (await this.context.publicApiService.postUnauthorized(state, 'token/refresh', request)).data;
        }
        catch {
            throw new Error('Login data are expired. Please try to login again');
        }
    }
    async getTokenForState(state) {
        // prepare request
        const request = {
            clientId: state.clientId,
            clientSecret: state.clientSecret,
        };
        try {
            const response = await this.context.publicApiService.postUnauthorized(state, 'token', request);
            return response.data;
        }
        catch {
            throw new Error(`Verify clientId/clientSecret flags (EMMA_CLIENT_ID/EMMA_CLIENT_SECRET env vars) supplied for the ${constants_1.default.cliName}.`);
        }
    }
}
exports.default = AuthorizationService;
