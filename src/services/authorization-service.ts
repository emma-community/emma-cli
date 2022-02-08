import ContextService from './context-service'
import constants from '../utils/constants'
import {Token} from '../models/token'
import {State} from '../models/state'

export default class AuthorizationService {
  private context: ContextService;

  constructor(context: ContextService) {
    this.context = context
  }

  async getToken(): Promise<Token> {
    const state = await this.context.stateService.getState()

    if (state.clientId != null && state.clientSecret != null) {
      return this.getTokenForState(state)
    }

    if (state.token == null) {
      throw new Error('Can not authorize you in emma platform. Please use login command or set the following env variables: EMMA_CLIENT_ID, EMMA_CLIENT_SECRET, EMMA_BASE_URL - optional, EMMA_AVATAR_CODE - optional')
    }

    // prepare token refresh request
    const request = {
      refreshToken: state.token.refresh_token,
    }

    try {
      return (await this.context.publicApiService.postUnauthorized(state, 'token/refresh', request)).data as Token
    } catch {
      throw new Error('Login data are expired. Please try to login again')
    }
  }

  async getTokenForState(state: State): Promise<Token> {
    // prepare request
    const request = {
      clientId: state.clientId,
      clientSecret: state.clientSecret,
    }

    try {
      const response = await this.context.publicApiService.postUnauthorized(state, 'token', request)
      return response.data as Token
    } catch {
      throw new Error(`Verify clientId/clientSecret flags (EMMA_CLIENT_ID/EMMA_CLIENT_SECRET env vars) supplied for the ${constants.cliName}.`)
    }
  }
}
