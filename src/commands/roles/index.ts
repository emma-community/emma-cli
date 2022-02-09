import {Flags} from '@oclif/core'
import constants from '../../utils/constants'
import BaseCommand from '../../commons/base-command'

export default class Roles extends BaseCommand {
  static description = 'Get a list of company roles'

  static examples = [
    `$ ${constants.cliName} roles {id}`,
    `$ ${constants.cliName} roles`,
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
  }

  static args = [
    {name: 'id', description: 'Id of requested role', required: false},
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Roles)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    if (args.id) {
      const response = await publicApiService.get(`roles/${args.id}`, params)
      this.printObject(flags, response.data)
    } else {
      const response = await publicApiService.get('roles', params)
      this.printArray(flags, response.data)
    }
  }
}
