import TerraformProxyDataCommand from '../../../../commons/terraform-proxy-data-command'

export default class Proxy extends TerraformProxyDataCommand {
  static description = 'Get template'

  async getData(): Promise<any> {
    const data = await this.readAllFlexPages('flex/templates', {})
    const filtered = this.getFilteredInstances(data)
    return this.getOrderedInstances(filtered)
  }
}
