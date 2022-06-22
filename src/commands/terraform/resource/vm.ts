import {get} from "lodash";
import TerraformResourceCommand from "../../../commons/terraform-resource-command"

export default class Resource extends TerraformResourceCommand {
  static description = 'Manage VM instance'

  validateData(data: any) {
    this.validateValue(data, 'providerId')
    this.validateValue(data, 'locationId')
    this.validateValue(data, 'bundleId')
    this.validateValue(data, 'cloudType')
    this.validateValue(data, 'templateId')
    this.validateValue(data, 'dcId')
    this.validateValue(data, 'hostname')
    this.validateValue(data, 'username')
    this.validateValue(data, 'sshId')
    this.validateValue(data, 'cloudNetworkType')

    this.validateEnum(data, 'cloudNetworkType', ['undefined', 'default', 'isolated', 'multi_cloud'])
  }

  async getOrderDetails(orderId: number) {
    const publicApiService = this.getPublicApiService()

    return await this.wait(
      async () => {
        const getOrderResponse = await publicApiService.get(`orders/${orderId}`, {});

        return getOrderResponse.data
      },
      async (item: any) => {
        return {
          isValid: item != null && item.statusId === 'COMPLETE',
          isError: item != null && item.statusId === 'ERROR'
        }
      }
    )
  }

  async getProductDetails(productId: number) {
    const publicApiService = this.getPublicApiService();

    return await this.wait(
      async () => {
        const response = await publicApiService.get('products', {})

        return response.data.find((item: any) => item.id === productId)
      },
      async (item: any) => {
        return {
          isValid: item != null && item.externalId != null,
          isError: false
        }
      }
    )
  }

  async getVmDetails(externalId: number) {
    const publicApiService = this.getPublicApiService()
    const response = await publicApiService.get(`flex/vms/${externalId}`, {})

    return response.data
  }

  async createStateByOrderId(data: any, orderId: number) {
    // retrieve order
    const order = await this.getOrderDetails(orderId);
    const productId = order.items[0].productId;

    // retrieve product
    const product = await this.getProductDetails(productId);
    const externalId = product.externalId;

    // retrieve VM
    const vm = await this.getVmDetails(externalId);

    return {
      data,
      orderId,
      order,
      product,
      vm
    }
  }

  getOrderIdByState(state: any) {
    const orderId = get(state, 'orderId');

    if (orderId == null) {
      throw new Error("Resource state is corrupted. Not found required orderId field")
    }

    return orderId;
  }

  getDataByState(state: any) {
    const data = get(state, 'data');

    if (data == null) {
      throw new Error("Resource state is corrupted. Not found required data field")
    }

    return JSON.parse(data);
  }

  getProductIdByState(state: any) {
    const product = get(state, 'product');

    if (product == null) {
      throw new Error("Resource state is corrupted. Not found required product field")
    }

    const productId = JSON.parse(product).id

    if (productId == null) {
      throw new Error("Resource state is corrupted. Not found required product.id field")
    }

    return productId;
  }

  async create(data: any): Promise<any> {
    // validate input firstly
    this.validateData(data);

    const publicApiService = this.getPublicApiService()

    // create vm request
    const request = {
      productType: 'VM',
      productAction: 'ADD',
      productParams: {
        providerId: data.providerId,
        locationId: data.locationId,
        bundleId: data.bundleId,
        cloudType: data.cloudType,
        templateId: data.templateId,
      },
      params: {
        dcId: data.dcId,
        name: data.hostname,
        auth: {
          ssh: {
            username: data.username,
            id: data.sshId,
          },
        },
        network: {
          cloudNetworkType: data.cloudNetworkType,
        },
      },
    }
    const createOrderResponse = await publicApiService.post('orders', {items: [request]}, {});

    return await this.createStateByOrderId(data, createOrderResponse.data.id)
  }

  async read(state: any): Promise<any> {
    const orderId = this.getOrderIdByState(state);
    const data = this.getDataByState(state);
    return await this.createStateByOrderId(data, orderId)
  }

  async update(state: any, data: any): Promise<any> {
    const orderId = this.getOrderIdByState(state);
    const oldData = this.getDataByState(state);

    // check if transfer was requested
    const updateRequested = data.providerId !== oldData.providerId
      || data.locationId !== oldData.locationId
      || data.bundleId !== oldData.bundleId
      || data.cloudType !== oldData.cloudType
      || data.templateId !== oldData.templateId
      || data.dcId !== oldData.dcId
      || data.sshId !== oldData.sshId
      || data.username !== oldData.username
      || data.cloudNetworkType !== oldData.cloudNetworkType
      || data.hostname !== oldData.hostname;

    if (updateRequested) {
      // just recreate a resource
      await this.delete(state);
      return await this.create(data);
    } else {
      return await this.createStateByOrderId(data, orderId)
    }
  }

  async delete(state: any): Promise<any> {
    const productId = this.getProductIdByState(state);
    const publicApiService = this.getPublicApiService();

    const request = {
      productType: 'VM',
      productAction: 'DELETE',
      productParams: {
        productId: productId,
      },
      params: {},
    }

    // call delete function
    const response = await publicApiService.post('orders', {items: [request]}, {});
    return await this.getOrderDetails(response.data.id)
  }
}
