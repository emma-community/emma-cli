import {Flags} from '@oclif/core'
import constants from '../../utils/constants'
import BaseCommand from '../../commons/base-command'

export default class Applications extends BaseCommand {
  static description = 'Get list of current company applications'

  static examples = [
    `$ ${constants.cliName} products applications`,
    `$ ${constants.cliName} products applications {id}`,
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
  }

  static args = [
    {name: 'id', description: 'Id of requested product', required: false},
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Applications)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    if (args.id) {
      const response = await publicApiService.get(`products/applications/${args.id}`, params)
      this.printObject(flags, response.data)
    } else {
      const response = await publicApiService.get('products/applications', params)
      this.printArray(flags, response.data)
    }
  }
}
