import {Flags} from '@oclif/core'
import constants from '../../../utils/constants'
import BaseCommand from '../../../commons/base-command'

export default class StartSpotOrder extends BaseCommand {
  static description = 'Start spot'

  static examples = [
    `$ ${constants.cliName} orders spot start`,
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    productId: Flags.integer({description: 'Product id of spot', required: true}),
  }

  static args = []

  async run(): Promise<any> {
    const {flags} = await this.parse(StartSpotOrder)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const request = {
      productType: 'SPOT_VM',
      productAction: 'ACTION',
      productParams: {
        productId: params.productId,
        actionType: 'START',
      },
      params: {},
    }

    const response = await publicApiService.post('orders', {items: [request]}, {})
    this.printObject(flags, response.data)
  }
}
