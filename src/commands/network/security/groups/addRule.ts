import {Flags} from '@oclif/core'
import constants from '../../../../utils/constants'
import BaseCommand from '../../../../commons/base-command'

export default class GetSecurityGroups extends BaseCommand {
  static description = 'Get list of current company security groups'

  static examples = [
    `$ ${constants.cliName} network security groups`,
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    securityGroupsId: Flags.integer({description: 'Security groups id', required: true}),
    policy: Flags.enum({options: ["ALLOW", "DENY"], description: 'Policy type', required: true}),
    direction: Flags.enum({options: ["INBOUND", "OUTBOUND"], description: 'Direction', required: true}),
    protocol: Flags.enum({options: ["all", "TCP", "UDP", "ICMP", "GRE", "ESP", "AH", "SCTP", "IPIP"], description: 'Protocol', required: true}),
    ports: Flags.string({description: 'Rule ports', required: true}),
    ipRange: Flags.string({description: 'Ip range', required: true}),
    description: Flags.string({description: 'Description of rule', required: false}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(GetSecurityGroups)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    // get SGs
    const groups = await publicApiService.get('network/security/group', params)
    const group = groups.data.find((item: any) => item.id === params.securityGroupsId)

    if (group == null) {
      throw new Error(`Security group with id ${params.securityGroupsId} not found`)
    }

    const request = {
      isAddQuery: true,
      rulesDirectionType: params.direction,
      securityGroups: [
        {
          id: group.id,
          providerId: group.providerId,
          providerCloudType: group.providerCloudType,
          organizationId: group.organizationId,
          rules: group.rules.filter((item: any) => item.direction === params.direction).concat([{
            policy: params.policy,
            direction: params.direction,
            protocol: params.protocol,
            ports: params.ports,
            ipRange: params.ipRange,
            description: params.description
          }])
        }
      ]
    }

    const response = await publicApiService.put('network/security/group', request, params)
    this.printArray(flags, response.data)
  }
}
