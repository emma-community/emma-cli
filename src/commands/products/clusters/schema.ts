import {Flags} from '@oclif/core'
import BaseCommand from '../../../commons/base-command'

export default class K8sSchema extends BaseCommand {
  static description = 'Get cluster configuration schema'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    applicationId: Flags.integer({description: 'Application id', required: true}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(K8sSchema)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get(`k8s/schema/${params.applicationId}`, params)
    this.printObject(flags, response.data)
  }
}
