import {Flags} from '@oclif/core'
import BaseCommand from '../../../commons/base-command'

export default class TransferVmOrder extends BaseCommand {
  static description = 'Transfer vm'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    productId: Flags.integer({description: 'Product id of vm', required: true}),
    dcId: Flags.integer({description: 'DC id from available provider tuple', required: true}),
    providerId: Flags.integer({description: 'Provider id from available provider tuple', required: true}),
    cloudType: Flags.string({description: 'Cloud type from available provider tuple', required: true}),
    doNotDeleteSource: Flags.boolean({description: 'Print a yaml output', required: false}),
  }

  static args = []

  async run(): Promise<any> {
    const {flags} = await this.parse(TransferVmOrder)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()
    const deleteSource = !params.doNotDeleteSource

    const request = {
      productType: 'VM',
      productAction: 'TRANSFER',
      productParams: {
        productId: params.productId,
        dcId: params.dcId,
        providerId: params.providerId,
        cloudType: params.cloudType,
        deleteSource,
      },
      params: {},
    }

    const response = await publicApiService.post('orders', {items: [request]}, {})
    this.printObject(flags, response.data)
  }
}
