"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_service_1 = require("./state-service");
const public_api_service_1 = require("./public-api-service");
const authorization_service_1 = require("./authorization-service");
class ContextService {
    constructor() {
        this.stateService = new state_service_1.default(this);
        this.publicApiService = new public_api_service_1.default(this);
        this.authorizationService = new authorization_service_1.default(this);
    }
}
exports.default = ContextService;
