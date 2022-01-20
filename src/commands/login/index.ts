import {Command, Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class Login extends BaseCommand {

  static description = 'Login in emma platform'

  static examples = [
    `$ ${constants.cliName} login --clientId 8ace4829-3b00-4480-91a1-d7d8fc95d052 --clientSecret 3a5f10e6-d8a7-4ce8-b390-badba79295ad`,
  ]

  static flags = {
    clientId: Flags.string({description: 'Service App client id', required: true}),
    clientSecret: Flags.string({description: 'Service App client secret', required: true}),
    baseUrl: Flags.string({description: 'Base url for emma platform instance', required: false}),
    avatarCode: Flags.string({description: 'Base avatar code in emma platform instance', required: false}),
  }

  static args = []

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Login);

    const state = await this.getContext().stateService
      .setState(flags.clientId, flags.clientSecret, flags.baseUrl, flags.avatarCode);

    await this.printObject({}, `Successfully login in ${state.baseUrl} instance`);
  }
}
