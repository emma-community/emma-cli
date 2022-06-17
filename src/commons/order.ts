import {orderBy, get} from 'lodash'

export enum OrderDirection {
  asc,
  desc
}
export interface OrderDefinition {
  field: string,
  direction: 'asc' | 'desc'
}

function proceedOrder(data: Array<any>, orderDefinition: OrderDefinition) {
  return orderBy(data, (item) => get(item, orderDefinition.field), [orderDefinition.direction])
}

export default function order(data: Array<any>, orderDefinition: any) {
  return proceedOrder(data, orderDefinition as OrderDefinition)
}
