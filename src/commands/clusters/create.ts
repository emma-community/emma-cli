import {Flags} from '@oclif/core'
import BaseCommand from '../../commons/base-command'
// eslint-disable-next-line unicorn/prefer-module
const fs = require('fs')

export default class K8sCreate extends BaseCommand {
  static description = 'Create cluster by configuration schema'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    configFile: Flags.string({description: 'Config file location', required: false}),
    config: Flags.string({description: 'Config schema', required: false}),
  }

  static args = []

  async run(): Promise<any> {
    const {flags} = await this.parse(K8sCreate)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    // validate input
    if ((params.configFile == null && params.config == null) || (params.configFile != null && params.config != null)) {
      throw new Error("You have to specify either 'config' or 'configFile' parameter")
    }

    let request = params.config

    if (params.configFile != null) {
      request = String(fs.readFileSync(params.configFile))
    }

    const response = await publicApiService.post('k8s', JSON.parse(request), {})
    this.printObject(flags, response.data)
  }
}
