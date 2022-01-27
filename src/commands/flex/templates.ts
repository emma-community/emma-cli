import {Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class Templates extends BaseCommand {

  static description = `Get list of templates`

  static examples = [
    `$ ${constants.cliName} flex templates`,
    `$ ${constants.cliName} flex templates {id}`
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
    const {args, flags} = await this.parse(Templates);
    const params = this.getParamsMap(flags);
    const publicApiService = this.getPublicApiService();

    if (args.id) {
      const response = await publicApiService.get(`flex/templates/${args.id}`, params);
      this.printObject(flags, response.data);
    } else {
      const response = await publicApiService.get('flex/templates', params);
      this.printArray(flags, response.data, undefined);
    }
  }
}