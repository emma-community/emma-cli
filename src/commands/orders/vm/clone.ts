import {Flags} from '@oclif/core'
import constants from '../../../utils/constants'
import BaseCommand from '../../../commons/base-command'

export default class CloneVmOrder extends BaseCommand {
  static description = 'Clone vm'

  static examples = [
    `$ ${constants.cliName} orders vm clone`,
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    productId: Flags.integer({description: 'Product id of vm', required: true}),
    newVmName: Flags.string({description: 'New Vm name', required: true}),
  }

  static args = []

  async run(): Promise<any> {
    const {flags} = await this.parse(CloneVmOrder)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const request = {
      productType: 'VM',
      productAction: 'CLONE',
      productParams: {
        productId: params.productId,
        sourceProductId: params.productId,
        newVmName: params.newVmName,
      },
      params: {},
    }

    const response = await publicApiService.post('orders', {items: [request]}, {})
    this.printObject(flags, response.data)
  }
}
