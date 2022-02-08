import ContextService from './context-service'
import axios, {AxiosInstance, AxiosResponse} from 'axios'
import {State} from '../models/state'

// eslint-disable-next-line unicorn/prefer-module
const qs = require('qs')

export default class PublicApiService {
  private context: ContextService;

  constructor(context: ContextService) {
    this.context = context

    // fight with custom ssl certificates
    const rootCas = require('ssl-root-cas').create() // eslint-disable-line unicorn/prefer-module
    const https = require('https') // eslint-disable-line unicorn/prefer-module
    const path = require('path') // eslint-disable-line unicorn/prefer-module
    rootCas.addFile(path.resolve(__dirname, '../../config/rootCA.crt')) // eslint-disable-line unicorn/prefer-module
    https.globalAgent.options.ca = rootCas
  }

  async postUnauthorized(state: State, path: string, request: any): Promise<AxiosResponse<any>> {
    return axios.post(`${state.baseUrl}/external/v1/${state.avatarCode}/${path}`, request)
  }

  async get(path: string, queryParameters: any | undefined): Promise<AxiosResponse<any>> {
    const restOfUrl = this.getRestOfUrl(queryParameters)
    const instance = await this.getAxios()
    return instance.get(`${path}${restOfUrl}`)
  }

  async post(path: string, request: any, queryParameters: any | undefined): Promise<AxiosResponse<any>> {
    const restOfUrl = this.getRestOfUrl(queryParameters)
    const instance = await this.getAxios()
    return instance.post(`${path}${restOfUrl}`, request)
  }

  async put(path: string, request: any, queryParameters: any | undefined): Promise<AxiosResponse<any>> {
    const restOfUrl = this.getRestOfUrl(queryParameters)
    const instance = await this.getAxios()
    return instance.put(`${path}${restOfUrl}`, request)
  }

  async patch(path: string, request: any, queryParameters: any | undefined): Promise<AxiosResponse<any>> {
    const restOfUrl = this.getRestOfUrl(queryParameters)
    const instance = await this.getAxios()
    return instance.patch(`${path}${restOfUrl}`, request)
  }

  async delete(path: string, queryParameters: any | undefined): Promise<AxiosResponse<any>> {
    const restOfUrl = this.getRestOfUrl(queryParameters)
    const instance = await this.getAxios()
    return instance.delete(`${path}${restOfUrl}`)
  }

  getRestOfUrl(queryParameters: any | undefined): string {
    return queryParameters == null ? '' : `?${qs.stringify(queryParameters)}`
  }

  async getAxios(): Promise<AxiosInstance> {
    const state = await this.context.stateService.getState()
    const token = await this.context.authorizationService.getToken()
    return axios.create({
      baseURL: `${state.baseUrl}/external/v1/${state.avatarCode}/`,
      headers: {Authorization: 'Bearer ' + token.access_token},
    })
  }
}
