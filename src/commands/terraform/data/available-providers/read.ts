import TerraformProxyDataCommand from '../../../../commons/terraform-proxy-data-command'

export default class Proxy extends TerraformProxyDataCommand {
  static description = 'Get available providers for a vm transferring'

  static args = [
    {name: 'id', description: 'Id of transferring vm', required: true},
  ]

  async getData(): Promise<any> {
    const params = await this.getTargetArgs(Proxy.args)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get(`flex/vms/${params.id}/provider/available`, {})
    const filtered = this.getFilteredInstances(response.data)
    return this.getOrderedInstancesWithDefault(filtered, {field: 'priceDimension.pricePerUnit', direction: 'asc'})
  }
}
