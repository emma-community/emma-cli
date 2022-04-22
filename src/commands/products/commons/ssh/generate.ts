import {Flags} from '@oclif/core'
import BaseCommand from '../../../../commons/base-command'

export default class GenerateSsh extends BaseCommand {
  static description = 'Generate ssh key in company'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    keyName: Flags.string({description: 'Ssh key name', required: true}),
    host: Flags.string({description: 'Ssh host name', required: true}),
    userName: Flags.string({description: 'Ssh user name', required: true}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(GenerateSsh)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const request = {
      keyName: params.keyName,
      userName: params.userName,
      host: params.host,
    }

    const response = await publicApiService.post('ssh/generate', request, {})
    this.printObject(flags, response.data)
  }
}
