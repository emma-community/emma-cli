import {Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class PermissionSets extends BaseCommand {

  static description = `Get list of current company permission set`

  static examples = [
    `$ ${constants.cliName} permissionSets {id}`,
    `$ ${constants.cliName} permissionSets`
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false})
  }

  static args = [
    {name: 'id', description: 'Id of requested permissionSet', required: false}
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(PermissionSets);
    const params = this.getParamsMap(flags);
    const publicApiService = this.getPublicApiService();

    if (args.id) {
      const response = await publicApiService.get(`permissionSets/${args.id}`, params);
      this.printObject(flags, response.data);
    } else {
      const response = await publicApiService.get('permissionSets', params);
      this.printArray(flags, response.data, undefined);
    }
  }
}