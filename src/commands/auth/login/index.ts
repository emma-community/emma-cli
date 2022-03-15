import {Flags} from '@oclif/core'
import constants from '../../../utils/constants'
import BaseCommand from '../../../commons/base-command'

export default class Login extends BaseCommand {
  static description = 'Login in emma platform'

  static examples = [
    `$ ${constants.cliName} login`,
  ]

  static flags = {
    clientId: Flags.string({description: 'Service App client id', required: true}),
    clientSecret: Flags.string({description: 'Service App client secret', required: true}),
    baseUrl: Flags.string({description: 'Base url for emma platform instance', required: false}),
    avatarCode: Flags.string({description: 'Base avatar code in emma platform instance', required: false}),
  }

  static args = []

  async run(): Promise<any> {
    const {flags} = await this.parse(Login)

    const state = await this.getContext().stateService
    .setState(flags.clientId, flags.clientSecret, flags.baseUrl, flags.avatarCode)

    await this.printObject({}, `Successfully login in ${state.baseUrl} instance`)
  }
}
