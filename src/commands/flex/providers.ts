import {Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class Providers extends BaseCommand {

  static description = `Get list of providers`

  static examples = [
    `$ ${constants.cliName} flex providers`,
    `$ ${constants.cliName} flex providers {id}`
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    pageNumber: Flags.integer({description: '//TODO add description', required: false}),
    itemCount: Flags.integer({description: '//TODO add description', required: false}),
    sortBy: Flags.string({description: '//TODO add description', required: false}),
    order: Flags.string({description: '//TODO add description', required: false})
  }

  static args = [
    {name: 'id', description: 'Id of requested flex', required: false}
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Providers);
    const params = this.getParamsMap(flags);
    const publicApiService = this.getPublicApiService();

    if (args.id) {
      const response = await publicApiService.get(`flex/providers/${args.id}`, params);
      this.printObject(flags, response.data);
    } else {
      const response = await publicApiService.get('flex/providers', params);
      this.printArray(flags, response.data.content, undefined);
    }
  }
}