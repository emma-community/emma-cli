import {Command, Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class Locations extends BaseCommand {

  static description = 'Read locations'

  static examples = [
    `$ ${constants.cliName} flex locations`,
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    pageNumber: Flags.integer({description: 'Page number default 0', required: false}),
    itemCount: Flags.integer({description: 'Item count default 5', required: false}),
    sortBy: Flags.string({description: 'Sort by field default id', required: false}),
    order: Flags.string({description: 'Order direction default ASC', required: false}),
  }

  static args = [
    {name: 'id', description: 'Id of requested location', required: false}
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Locations);
    const params = this.getParamsMap(flags);
    const publicApiService = this.getPublicApiService();

    if (args.id) {
      const response = await publicApiService.get(`flex/locations/${args.id}`, {});
      this.printObject(flags, response.data);
    } else {
      const response = await publicApiService.get('flex/locations', params);
      this.printArray(flags, response.data.content, undefined);
    }
  }
}
