import BaseCommand from '../../commons/base-command'
import {Flags} from "@oclif/core";

export default class Info extends BaseCommand {
  static description = 'Get login information'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
  }

  static args = []

  async run(): Promise<any> {
    const {flags} = await this.parse(Info)
    const state = await this.getContext().stateService.getState()
    const publicApiService = this.getPublicApiService()
    const company = await publicApiService.get('company', {})
    const project = await publicApiService.get('projects/current', {})

    this.printArray(flags, [{
      companyId: company.data.id,
      companyName: company.data.name,
      projectId: project.data.id,
      projectName: project.data.name,
      clientId: state.clientId,
      avatarCode: state.avatarCode,
      baseUrl: state.baseUrl,
    }])
  }
}
