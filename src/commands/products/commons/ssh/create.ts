import {Flags} from '@oclif/core'
import BaseCommand from '../../../../commons/base-command'

export default class CreateSsh extends BaseCommand {
  static description = 'Create ssh key in company'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    name: Flags.string({description: 'Ssh name', required: true}),
    publicKey: Flags.string({description: 'Ssh public key', required: true}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(CreateSsh)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const request = {
      name: params.name,
      publicKey : params.publicKey
    }

    const response = await publicApiService.post('ssh', request, {})
    this.printObject(flags, response.data)
  }
}
