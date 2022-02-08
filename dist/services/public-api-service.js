"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
// eslint-disable-next-line unicorn/prefer-module
const qs = require('qs');
class PublicApiService {
    constructor(context) {
        this.context = context;
        // fight with custom ssl certificates
        const rootCas = require('ssl-root-cas').create(); // eslint-disable-line unicorn/prefer-module
        const https = require('https'); // eslint-disable-line unicorn/prefer-module
        const path = require('path'); // eslint-disable-line unicorn/prefer-module
        rootCas.addFile(path.resolve(__dirname, '../../config/rootCA.crt')); // eslint-disable-line unicorn/prefer-module
        https.globalAgent.options.ca = rootCas;
    }
    async postUnauthorized(state, path, request) {
        return axios_1.default.post(`${state.baseUrl}/external/v1/${state.avatarCode}/${path}`, request);
    }
    async get(path, queryParameters) {
        const restOfUrl = this.getRestOfUrl(queryParameters);
        const instance = await this.getAxios();
        return instance.get(`${path}${restOfUrl}`);
    }
    async post(path, request, queryParameters) {
        const restOfUrl = this.getRestOfUrl(queryParameters);
        const instance = await this.getAxios();
        return instance.post(`${path}${restOfUrl}`, request);
    }
    async put(path, request, queryParameters) {
        const restOfUrl = this.getRestOfUrl(queryParameters);
        const instance = await this.getAxios();
        return instance.put(`${path}${restOfUrl}`, request);
    }
    async patch(path, request, queryParameters) {
        const restOfUrl = this.getRestOfUrl(queryParameters);
        const instance = await this.getAxios();
        return instance.patch(`${path}${restOfUrl}`, request);
    }
    async delete(path, queryParameters) {
        const restOfUrl = this.getRestOfUrl(queryParameters);
        const instance = await this.getAxios();
        return instance.delete(`${path}${restOfUrl}`);
    }
    getRestOfUrl(queryParameters) {
        return queryParameters == null ? '' : `?${qs.stringify(queryParameters)}`;
    }
    async getAxios() {
        const state = await this.context.stateService.getState();
        const token = await this.context.authorizationService.getToken();
        return axios_1.default.create({
            baseURL: `${state.baseUrl}/external/v1/${state.avatarCode}/`,
            headers: { Authorization: 'Bearer ' + token.access_token },
        });
    }
}
exports.default = PublicApiService;
