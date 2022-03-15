import {Flags} from '@oclif/core'
import constants from '../../../utils/constants'
import BaseCommand from '../../../commons/base-command'

export default class CreateVmOrder extends BaseCommand {
  static description = 'Create vm'

  static examples = [
    `$ ${constants.cliName} orders vm create`,
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    providerId: Flags.integer({description: 'Provider id from wizard tuple', required: true}),
    locationId: Flags.integer({description: 'Location id from wizard tuple', required: true}),
    bundleId: Flags.integer({description: 'Bundle id from wizard tuple', required: true}),
    cloudType: Flags.string({description: 'Cloud type from wizard tuple', required: true}),
    templateId: Flags.integer({description: 'Template id from wizard tuple', required: true}),
    dcId: Flags.integer({description: 'DC id from wizard tuple', required: true}),
    sshId: Flags.integer({description: 'Ssh key id', required: true}),
    cloudNetworkType: Flags.string({description: 'Cloud network type', required: true}),
    username: Flags.string({description: 'Username for authorization in VM', required: true}),
    hostname: Flags.string({description: 'Hostname of VM', required: true}),
  }

  static args = []

  async run(): Promise<any> {
    const {flags} = await this.parse(CreateVmOrder)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const request = {
      productType: 'VM',
      productAction: 'ADD',
      productParams: {
        providerId: params.providerId,
        locationId: params.locationId,
        bundleId: params.bundleId,
        cloudType: params.cloudType,
        templateId: params.templateId,
      },
      params: {
        dcId: params.dcId,
        name: params.hostname,
        auth: {
          ssh: {
            username: params.username,
            id: params.sshId,
          },
        },
        network: {
          cloudNetworkType: params.cloudNetworkType,
        },
      },
    }

    const response = await publicApiService.post('orders', {items: [request]}, {})
    this.printObject(flags, response.data)
  }
}
