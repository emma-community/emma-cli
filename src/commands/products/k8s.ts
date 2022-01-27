import {Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class K8s extends BaseCommand {

  static description = `Get list of current company k8s clusters`

  static examples = [
    `$ ${constants.cliName} products k8s`,
    `$ ${constants.cliName} products k8s {id}`
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false})
  }

  static args = [
    {name: 'id', description: 'Id of requested product', required: false}
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(K8s);
    const params = this.getParamsMap(flags);
    const publicApiService = this.getPublicApiService();

    if (args.id) {
      const response = await publicApiService.get(`products/k8s/${args.id}`, params);
      this.printObject(flags, response.data);
    } else {
      const response = await publicApiService.get('products/k8s', params);
      this.printArray(flags, response.data.content, undefined);
    }
  }
}