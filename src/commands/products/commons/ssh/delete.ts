import {Flags} from '@oclif/core'
import BaseCommand from '../../../../commons/base-command'

export default class DeleteSsh extends BaseCommand {
  static description = 'Delete ssh key in company'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
  }

  static args = [
    {name: 'id', description: 'Id of ssh key', required: true},
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(DeleteSsh)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.delete(`ssh/${args.id}`, {})
    this.printObject(flags, response.data)
  }
}
