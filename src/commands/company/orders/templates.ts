import {Flags} from '@oclif/core'
import BaseCommand from '../../../commons/base-command'

export default class Templates extends BaseCommand {
  static description = 'Get list of current company order templates'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(Templates)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get('orders/templates', params)
    this.printArray(flags, response.data)
  }
}