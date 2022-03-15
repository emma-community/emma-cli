import {Flags} from '@oclif/core'
import BaseCommand from '../../../commons/base-command'

export default class Tickets extends BaseCommand {
  static description = 'Get tickets'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
  }

  static args = [
    {name: 'uid', description: 'Uid of requested ticket', required: false},
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Tickets)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    if (args.uid) {
      const response = await publicApiService.get(`tickets/${args.uid}`, params)
      this.printObject(flags, response.data)
    } else {
      const response = await publicApiService.get('tickets', params)
      this.printArray(flags, response.data)
    }
  }
}
