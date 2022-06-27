import TerraformProxyDataCommand from '../../../../commons/terraform-proxy-data-command'

export default class Proxy extends TerraformProxyDataCommand {
  static description = 'Get ssh key'

  async getData(): Promise<any> {
    const publicApiService = this.getPublicApiService()
    const response = await publicApiService.get('ssh', {})
    const filtered = this.getFilteredInstances(response.data)
    return this.getOrderedInstances(filtered)
  }
}
