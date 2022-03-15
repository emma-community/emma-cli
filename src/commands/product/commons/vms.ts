import {Flags} from '@oclif/core'
import BaseCommand from '../../../commons/base-command'

export default class Vms extends BaseCommand {
  static description = 'Get vm details'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
  }

  static args = [
    {name: 'id', description: 'Id of requested vm', required: true},
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Vms)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get(`flex/vms/${args.id}`, params)
    this.printObject(flags, response.data)
  }
}
