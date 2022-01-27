import {Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class CheckSpotPrice extends BaseCommand {

  static description = `Get list of current company orders`

  static examples = [
    `$ ${constants.cliName} orders check-spot-price`]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    providerId: Flags.integer({description: '//TODO add description', required: true}),
    bundleId: Flags.integer({description: '//TODO add description', required: true}),
    dcId: Flags.integer({description: '//TODO add description', required: true}),
    templateId: Flags.integer({description: '//TODO add description', required: true})
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(CheckSpotPrice);
    const params = this.getParamsMap(flags);
    const publicApiService = this.getPublicApiService();

    const response = await publicApiService.get('orders/check-spot-price', params);
    this.printArray(flags, response.data.content, undefined);
  }
}