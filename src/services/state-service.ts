import {State} from '../models/state'
import constants from '../utils/constants'
import ContextService from './context-service'
// eslint-disable-next-line unicorn/prefer-module
const fs = require('fs')

export default class StateService {
  private context: ContextService;

  constructor(context: ContextService) {
    this.context = context
  }

  envVarsAreSet(): boolean {
    return process.env.EMMA_CLIENT_ID != null && process.env.EMMA_CLIENT_SECRET != null
  }

  stateFileExists(): boolean {
    return fs.existsSync(constants.stateFilePath)
  }

  async getState(): Promise<State> {
    // check if all required env vars are set up
    if (this.envVarsAreSet()) {
      const baseUrl = process.env.EMMA_BASE_URL || constants.defaultBaseUrl
      const avatarCode = process.env.EMMA_AVATAR_CODE || constants.defaultAvatarCode
      const clientId = process.env.EMMA_CLIENT_ID
      const clientSecret = process.env.EMMA_CLIENT_SECRET

      return {
        baseUrl,
        avatarCode,
        clientId,
        clientSecret,
      } as State
    }

    if (this.stateFileExists()) {
      const fileContent = fs.readFileSync(constants.stateFilePath)
      return JSON.parse(fileContent)
    }

    throw new Error('Can not authorize you in emma platform. Please use login command or set the following env variables: EMMA_CLIENT_ID, EMMA_CLIENT_SECRET, EMMA_BASE_URL - optional, EMMA_AVATAR_CODE - optional')
  }

  async setState(clientId: string, clientSecret: string, baseUrlOpt: string | undefined, avatarCodeOpt: string | undefined): Promise<State> {
    const baseUrl = baseUrlOpt || constants.defaultBaseUrl
    const avatarCode = avatarCodeOpt || constants.defaultAvatarCode

    const state = {
      baseUrl,
      avatarCode,
      clientId,
      clientSecret,
    } as State

    state.token = await this.context.authorizationService.getTokenForState(state)

    // clear out clientId/clientSecret from the state
    state.clientId = undefined
    state.clientSecret = undefined

    // save state
    fs.writeFileSync(constants.stateFilePath, JSON.stringify(state))

    return state
  }

  async removeState(): Promise<void> {
    if (this.stateFileExists()) {
      fs.unlinkSync(constants.stateFilePath)
    }
  }
}
