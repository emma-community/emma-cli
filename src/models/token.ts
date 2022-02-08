export interface Token {
  otherClaims: any,
  access_token: string, // eslint-disable-line camelcase
  expires_in: number, // eslint-disable-line camelcase
  refresh_expires_in: number, // eslint-disable-line camelcase
  refresh_token: string // eslint-disable-line camelcase
}
