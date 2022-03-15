import {Flags} from '@oclif/core'
import BaseCommand from '../../../commons/base-command'

export default class Providers extends BaseCommand {
  static description = 'Get list of providers available for transfer a vm'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    itemCount: Flags.integer({description: 'Item count default 10000', required: false}),
  }

  static args = [
    {name: 'id', description: 'Id of transferring vm', required: true},
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Providers)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get(`flex/vms/${args.id}/provider/available`, params)
    this.printArray(flags, response.data)
  }
}
