import {State} from "../models/State";
import constants from "../utils/Constants";
import ContextService from "./ContextService";
const fs = require("fs");

export default class StateService {
  private context: ContextService;

  constructor(context: ContextService) {
    this.context = context;
  }

  envVarsAreSet(): Boolean {
    return process.env.EMMA_CLIENT_ID != null && process.env.EMMA_CLIENT_SECRET != null;
  }

  stateFileExists(): Boolean {
    return fs.existsSync(constants.stateFilePath);
  }

  async getState(): Promise<State> {
    // check if all required env vars are set up
    if (this.envVarsAreSet()) {
      const baseUrl = process.env.EMMA_BASE_URL || constants.defaultBaseUrl;
      const avatarCode = process.env.EMMA_AVATAR_CODE || constants.defaultAvatarCode;
      const clientId = process.env.EMMA_CLIENT_ID;
      const clientSecret = process.env.EMMA_CLIENT_SECRET;

      return {
        baseUrl,
        avatarCode,
        clientId,
        clientSecret
      } as State;
    } else if (this.stateFileExists()) {
      const fileContent = fs.readFileSync(constants.stateFilePath);
      return JSON.parse(fileContent);
    } else {
      throw new Error("Can not authorize you in emma platform. Please use login command or set the following env variables: EMMA_CLIENT_ID, EMMA_CLIENT_SECRET, EMMA_BASE_URL - optional, EMMA_AVATAR_CODE - optional");
    }
  }

  async setState(clientId: string, clientSecret: string, baseUrlOpt: string | undefined, avatarCodeOpt: string | undefined): Promise<State> {
    const baseUrl = baseUrlOpt || constants.defaultBaseUrl;
    const avatarCode = avatarCodeOpt || constants.defaultAvatarCode;

    const state = {
      baseUrl,
      avatarCode,
      clientId,
      clientSecret
    } as State;

    state.token = await this.context.authorizationService.getTokenForState(state);

    // clear out clientId/clientSecret from the state
    state.clientId = undefined;
    state.clientSecret = undefined;

    // save state
    fs.writeFileSync(constants.stateFilePath, JSON.stringify(state));

    return state;
  }

  async removeState() {
    if (this.stateFileExists()) {
      fs.unlinkSync(constants.stateFilePath);
    }
  }
}
