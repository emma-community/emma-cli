import {Flags} from '@oclif/core'
import constants from '../../utils/constants'
import BaseCommand from '../../commons/base-command'

export default class Search extends BaseCommand {
  static description = 'Get all ticket by search term'

  static examples = [
    `$ ${constants.cliName} tickets search`,
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    term: Flags.string({description: 'Search term', required: true}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(Search)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get('tickets/search/{term}', params)
    this.printArray(flags, response.data)
  }
}
