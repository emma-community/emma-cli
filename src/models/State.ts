import {Token} from "./Token";

export interface State {
  baseUrl: string,
  avatarCode: string,
  clientId: string | undefined,
  clientSecret: string | undefined,
  token: Token
}
