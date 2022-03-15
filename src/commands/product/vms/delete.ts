import {Flags} from '@oclif/core'
import constants from '../../../utils/constants'
import BaseCommand from '../../../commons/base-command'

export default class DeleteVmOrder extends BaseCommand {
  static description = 'Delete vm'

  static examples = [
    `$ ${constants.cliName} orders vm delete`,
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    productId: Flags.integer({description: 'Product id of vm', required: true}),
  }

  static args = []

  async run(): Promise<any> {
    const {flags} = await this.parse(DeleteVmOrder)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const request = {
      productType: 'VM',
      productAction: 'DELETE',
      productParams: {
        productId: params.productId,
      },
      params: {},
    }

    const response = await publicApiService.post('orders', {items: [request]}, {})
    this.printObject(flags, response.data)
  }
}
