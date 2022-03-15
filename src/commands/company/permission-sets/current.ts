import {Flags} from '@oclif/core'
import constants from '../../../utils/constants'
import BaseCommand from '../../../commons/base-command'

export default class Current extends BaseCommand {
  static description = 'Get permission set for current client'

  static examples = [
    `$ ${constants.cliName} permissionSets current`,
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(Current)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get('permissionSets/current', params)
    this.printArray(flags, response.data)
  }
}
