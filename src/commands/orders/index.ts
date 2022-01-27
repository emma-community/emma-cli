import {Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class Orders extends BaseCommand {

  static description = `Get list of current company orders`

  static examples = [
    `$ ${constants.cliName} orders`,
    `$ ${constants.cliName} orders {id}`
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false})
  }

  static args = [
    {name: 'id', description: 'Id of requested order', required: false}
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Orders);
    const params = this.getParamsMap(flags);
    const publicApiService = this.getPublicApiService();

    if (args.id) {
      const response = await publicApiService.get(`orders/${args.id}`, params);
      this.printObject(flags, response.data);
    } else {
      const response = await publicApiService.get('orders', params);
      this.printArray(flags, response.data.content, undefined);
    }
  }
}