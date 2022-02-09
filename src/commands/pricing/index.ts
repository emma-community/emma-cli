import {Flags} from '@oclif/core'
import constants from '../../utils/constants'
import BaseCommand from '../../commons/base-command'

export default class Pricing extends BaseCommand {
  static description = 'Get a list of pricing'

  static examples = [
    `$ ${constants.cliName} pricing`,
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(Pricing)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get('pricing', params)
    this.printArray(flags, response.data)
  }
}
