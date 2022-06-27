import TargetFlagValue from './target-flag-value'
import BaseCommand from './base-command'
import filter from './filter'
import order, {OrderDefinition} from './order'

export default abstract class TerraformProxyDataCommand extends BaseCommand {
  async run(): Promise<any> {
    const data = await this.getData()

    if (data.length > 0) {
      console.log(JSON.stringify(data[0]))
    } else {
      throw new Error('Can not find any item by provided filter. Please specify a different filter condition')
    }
  }

  async getData(): Promise<any> {
    throw new Error("Not implemented 'getData' operation")
  }

  getFilteredInstances(data: any) {
    if (process.env.filter == null) {
      return data
    }

    return filter(data, JSON.parse(process.env.filter))
  }

  getOrderedInstances(data: any) {
    if (process.env.orderBy == null) {
      return data
    }

    return order(data, JSON.parse(process.env.orderBy))
  }

  getOrderedInstancesWithDefault(data: any, defaultOrder: OrderDefinition) {
    if (process.env.orderBy == null) {
      return order(data, defaultOrder)
    }

    return order(data, JSON.parse(process.env.orderBy))
  }

  async getTargetArgs(args: any): Promise<any> {
    const argsObject: any = {}

    args.map((arg: any) => {
      const value = process.env[arg.name]

      return {
        name: arg.name,
        value,
      }
    })
    .filter((arg: TargetFlagValue) => arg.value != null)
    .forEach((arg: TargetFlagValue) => {
      argsObject[arg.name] = arg.value
    })

    return  argsObject
  }
}
