import {Flags} from '@oclif/core'
import BaseCommand from '../../../commons/base-command'

export default class LimitsState extends BaseCommand {
  static description = 'Get company API limits information'

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
