import {Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class CheckSpotPrice extends BaseCommand {

  static description = `Check spot price`

  static examples = [
    `$ ${constants.cliName} orders check-spot-price`]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    providerId: Flags.integer({description: 'Provider id', required: true}),
    bundleId: Flags.integer({description: 'Bundle id', required: true}),
    dcId: Flags.integer({description: 'DC id', required: true}),
    templateId: Flags.integer({description: 'Template id', required: true})
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(CheckSpotPrice);
    const params = this.getParamsMap(flags);
    const publicApiService = this.getPublicApiService();

    const response = await publicApiService.get('orders/check-spot-price', params);
    this.printArray(flags, response.data, undefined);
  }
}
