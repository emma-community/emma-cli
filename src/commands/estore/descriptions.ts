import {Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class Descriptions extends BaseCommand {

  static description = `Get list of full application descriptions`

  static examples = [
    `$ ${constants.cliName} estore descriptions`]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false})
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Descriptions);
    const params = this.getParamsMap(flags);
    const publicApiService = this.getPublicApiService();

    const response = await publicApiService.get('estore/descriptions', params);
    this.printArray(flags, response.data.content, undefined);
  }
}