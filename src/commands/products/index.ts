import {Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class Products extends BaseCommand {

  static description = `Get list of current project products`

  static examples = [
    `$ ${constants.cliName} products`]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false})
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Products);
    const params = this.getParamsMap(flags);
    const publicApiService = this.getPublicApiService();

    const response = await publicApiService.get('products', params);
    this.printArray(flags, response.data, undefined);
  }
}