import {Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class Statistic extends BaseCommand {

  static description = `Get tickets statistic`

  static examples = [
    `$ ${constants.cliName} tickets statistic`]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false})
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Statistic);
    const params = this.getParamsMap(flags);
    const publicApiService = this.getPublicApiService();

    const response = await publicApiService.get('tickets/statistic', params);
    this.printArray(flags, response.data.content, undefined);
  }
}