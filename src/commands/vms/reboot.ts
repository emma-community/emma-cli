import {Flags} from '@oclif/core'
import BaseCommand from '../../commons/base-command'

export default class RebootVmOrder extends BaseCommand {
  static description = 'Reboot vm'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    productId: Flags.integer({description: 'Product id of vm', required: true}),
  }

  static args = []

  async run(): Promise<any> {
    const {flags} = await this.parse(RebootVmOrder)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const request = {
      productType: 'VM',
      productAction: 'ACTION',
      productParams: {
        productId: params.productId,
        actionType: 'RESTART',
      },
      params: {},
    }

    const response = await publicApiService.post('orders', {items: [request]}, {})
    this.printObject(flags, response.data)
  }
}
