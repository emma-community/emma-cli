import {Flags} from '@oclif/core'
import constants from '../../../../utils/constants'
import BaseCommand from '../../../../commons/base-command'

export default class GetSecurityGroups extends BaseCommand {
  static description = 'Get list of current company security groups'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(GetSecurityGroups)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get('network/security/group', params)
    this.printArray(flags, response.data)
  }
}
