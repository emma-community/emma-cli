import TerraformProxyDataCommand from '../../../../commons/terraform-proxy-data-command'

export default class Proxy extends TerraformProxyDataCommand {
  static description = 'Get auth info'

  async getData(): Promise<any> {
    const state = await this.getContext().stateService.getState()
    const publicApiService = this.getPublicApiService()
    const company = await publicApiService.get('company', {})
    const project = await publicApiService.get('projects/current', {})

    return [{
      companyId: company.data.id,
      companyName: company.data.name,
      projectId: project.data.id,
      projectName: project.data.name,
      clientId: state.clientId,
      avatarCode: state.avatarCode,
      baseUrl: state.baseUrl,
    }]
  }
}
