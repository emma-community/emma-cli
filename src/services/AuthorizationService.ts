import ContextService from "./ContextService";
import constants from "../utils/Constants";
import {Token} from "../models/Token";
import {State} from "../models/State";

export default class AuthorizationService {
  private context: ContextService;

  constructor(context: ContextService) {
    this.context = context;
  }

  async getToken(): Promise<Token> {
    const state = await this.context.stateService.getState();

    if (state.clientId != null && state.clientSecret != null) {
      return this.getTokenForState(state);
    } else if (state.token != null) {
      // prepare token refresh request
      const request = {
        refreshToken: state.token.refresh_token
      }

      try {
        return (await this.context.publicApiService.postUnauthorized(state, 'token/refresh', request)).data as Token;
      } catch (e) {
        throw new Error("Login data are expired. Please try to login again");
      }
    } else {
      throw new Error("Can not authorize you in emma platform. Please use login command or set the following env variables: EMMA_CLIENT_ID, EMMA_CLIENT_SECRET, EMMA_BASE_URL - optional, EMMA_AVATAR_CODE - optional");
    }
  }

  async getTokenForState(state: State): Promise<Token> {
    // prepare request
    const request = {
      clientId: state.clientId,
      clientSecret: state.clientSecret
    }

    try {
      const response = await this.context.publicApiService.postUnauthorized(state, 'token', request)
      return response.data as Token;
    } catch (e) {
      throw new Error(`Verify clientId/clientSecret flags (EMMA_CLIENT_ID/EMMA_CLIENT_SECRET env vars) supplied for the ${constants.cliName}.`)
    }
  }
}
