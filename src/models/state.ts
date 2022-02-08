import {Token} from './token'

export interface State {
  baseUrl: string,
  avatarCode: string,
  clientId: string | undefined,
  clientSecret: string | undefined,
  token: Token
}
