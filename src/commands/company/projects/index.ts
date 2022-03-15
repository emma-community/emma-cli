import {Flags} from '@oclif/core'
import BaseCommand from '../../../commons/base-command'

export default class Projects extends BaseCommand {
  static description = 'Get list of company\'s projects'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(Projects)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get('projects', params)
    this.printArray(flags, response.data)
  }
}
