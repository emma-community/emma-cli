import {Flags} from '@oclif/core'
import constants from '../../utils/constants'
import BaseCommand from '../../commons/base-command'

export default class LimitsState extends BaseCommand {
  static description = 'Get company rate limit state'

  static examples = [
    `$ ${constants.cliName} rate limits-state`,
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(LimitsState)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get('rate/limits/state', params)
    this.printObject(flags, response.data)
  }
}
