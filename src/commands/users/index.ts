import {Flags} from '@oclif/core'
import constants from '../../utils/constants'
import BaseCommand from '../../commons/base-command'

export default class Users extends BaseCommand {
  static description = 'Get user'

  static examples = [
    `$ ${constants.cliName} users {id}`,
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
  }

  static args = [
    {name: 'id', description: 'Id of requested user', required: true},
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Users)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get(`users/${args.id}`, params)
    this.printObject(flags, response.data)
  }
}
