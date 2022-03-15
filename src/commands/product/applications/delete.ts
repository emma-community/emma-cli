import {Flags} from '@oclif/core'
import BaseCommand from '../../../commons/base-command'

export default class DeleteEstore extends BaseCommand {
  static description = 'Delete application'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    productId: Flags.integer({description: 'Product id of application', required: true}),
  }

  static args = []

  async run(): Promise<any> {
    const {flags} = await this.parse(DeleteEstore)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const request = {
      productType: 'APP',
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
