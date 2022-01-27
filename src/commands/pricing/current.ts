import {Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class Current extends BaseCommand {

  static description = `Get the current company pricing`

  static examples = [
    `$ ${constants.cliName} pricing current`]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false})
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Current);
    const params = this.getParamsMap(flags);
    const publicApiService = this.getPublicApiService();

    const response = await publicApiService.get('pricing/current', params);
    this.printArray(flags, response.data, undefined);
  }
}