import TerraformProxyDataCommand from "../../../../commons/terraform-proxy-data-command";

export default class Proxy extends TerraformProxyDataCommand {
  static description = 'Get wizard-tuple'

  async getData(): Promise<any> {
    const publicApiService = this.getPublicApiService()
    const response = await publicApiService.get('flex/wizard-tuples-spot', {})
    const filtered = this.getFilteredInstances(response.data)
    return this.getOrderedInstancesWithDefault(filtered, {field: 'priceDimension.pricePerUnit', direction: 'asc'})
  }
}
