import TerraformProxyDataCommand from "../../../../commons/terraform-proxy-data-command";

export default class Proxy extends TerraformProxyDataCommand {
  static description = 'Get location'

  async getData(): Promise<any> {
    const data = await this.readAllFlexPages('flex/locations', {})
    const filtered = this.getFilteredInstances(data)
    return this.getOrderedInstances(filtered)
  }
}
