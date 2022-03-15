import {Flags} from '@oclif/core'
import BaseCommand from '../../../commons/base-command'

export default class Groups extends BaseCommand {
  static description = 'Get list of current project groups'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(Groups)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get('groups', params)
    this.printArray(flags, response.data)
  }
}
