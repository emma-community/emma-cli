import {Flags} from '@oclif/core'
import BaseCommand from '../../../commons/base-command'
// eslint-disable-next-line unicorn/prefer-module
const fs = require('fs')

export default class UpdateSecurityGroupsRules extends BaseCommand {
  static description = 'Update security groups rules'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    securityGroupsId: Flags.integer({description: 'Security groups id', required: true}),
    direction: Flags.enum({options: ['INBOUND', 'OUTBOUND'], description: 'Direction', required: true}),
    configFile: Flags.string({description: 'Config file location', required: false}),
    config: Flags.string({description: 'Config schema', required: false}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(UpdateSecurityGroupsRules)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    // get SGs
    const groups = await publicApiService.get('network/security/group', params)
    const group = groups.data.find((item: any) => item.id === params.securityGroupsId)

    if (group == null) {
      throw new Error(`Security group with id ${params.securityGroupsId} not found`)
    }

    // validate file input
    if ((params.configFile == null && params.config == null) || (params.configFile != null && params.config != null)) {
      throw new Error('You have to specify either \'config\' or \'configFile\' parameter')
    }

    let rulesString = params.config

    if (params.configFile != null) {
      rulesString = String(fs.readFileSync(params.configFile))
    }

    const rules = JSON.parse(rulesString)

    const request = {
      isAddQuery: true,
      rulesDirectionType: params.direction,
      securityGroups: [
        {
          id: group.id,
          providerId: group.providerId,
          providerCloudType: group.providerCloudType,
          organizationId: group.organizationId,
          rules,
        },
      ],
    }

    const response = await publicApiService.put('network/security/group', request, params)
    this.printArray(flags, response.data)
  }
}
