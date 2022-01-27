import {Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class LimitsState extends BaseCommand {

  static description = `Get company rate limit state`

  static examples = [
    `$ ${constants.cliName} rate limits-state`]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false})
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(LimitsState);
    const params = this.getParamsMap(flags);
    const publicApiService = this.getPublicApiService();

    const response = await publicApiService.get('rate/limits/state', params);
    this.printArray(flags, response.data, undefined);
  }
}