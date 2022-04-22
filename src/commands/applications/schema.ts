import {Flags} from '@oclif/core'
import BaseCommand from '../../commons/base-command'

export default class EstoreSchema extends BaseCommand {
  static description = 'Get application configuration schema'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    applicationId: Flags.integer({description: 'Application id', required: true}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(EstoreSchema)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get(`estore/schema/${params.applicationId}`, params)
    this.printObject(flags, response.data)
  }
}
