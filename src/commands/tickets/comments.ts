import {Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class Comments extends BaseCommand {

  static description = `Get ticket comments by ticket uid`

  static examples = [
    `$ ${constants.cliName} tickets comments {uid}`]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false})
  }

  static args = [
    {name: 'uid', description: 'Uid of requested ticket', required: true}
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Comments);
    const params = this.getParamsMap(flags);
    const publicApiService = this.getPublicApiService();

    const response = await publicApiService.get(`tickets/${args.uid}/comments`, params);
    this.printObject(flags, response.data);
  }
}