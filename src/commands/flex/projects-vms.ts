import {Flags} from '@oclif/core'
import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class ProjectsVms extends BaseCommand {

  static description = `Get a vm`

  static examples = [
    `$ ${constants.cliName} flex projects-vms {id}`]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    projectId: Flags.string({description: '//TODO add description', required: true})
  }

  static args = [
    {name: 'id', description: 'Id of requested flex', required: true}
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(ProjectsVms);
    const params = this.getParamsMap(flags);
    const publicApiService = this.getPublicApiService();

    const response = await publicApiService.get(`flex/projects/{projectId}/vms/${args.id}`, params);
    this.printObject(flags, response.data);
  }
}