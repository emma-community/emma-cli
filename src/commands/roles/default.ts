import {Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class Default extends BaseCommand {

  static description = `Get a list of default-roles`

  static examples = [
    `$ ${constants.cliName} roles default`,
    `$ ${constants.cliName} roles default {id}`
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false})
  }

  static args = [
    {name: 'id', description: 'Id of requested role', required: false}
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Default);
    const params = this.getParamsMap(flags);
    const publicApiService = this.getPublicApiService();

    if (args.id) {
      const response = await publicApiService.get(`roles/default/${args.id}`, params);
      this.printObject(flags, response.data);
    } else {
      const response = await publicApiService.get('roles/default', params);
      this.printArray(flags, response.data.content, undefined);
    }
  }
}