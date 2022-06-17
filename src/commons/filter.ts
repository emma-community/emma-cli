import {get} from 'lodash'

interface Filter {
  field: string,
  eq: any | undefined,
  notEq: string | undefined,
  gt: number | undefined,
  lt: number | undefined,
  gte: number | undefined,
  lte: number | undefined,
  like: string | undefined,
  in: Array<any> | undefined,
  has: any | undefined,
  or: Array<Filter> | undefined,
  and: Array<Filter> | undefined,
}

function getComparator(filter: Filter) {
  if (filter.eq != null) {
    return (item: any) => get(item, filter.field) === filter.eq
  } else if (filter.notEq != null) {
    return (item: any) => get(item, filter.field) !== filter.notEq
  } else if (filter.gt != null) {
    return (item: any) => get(item, filter.field) > filter.gt!
  } else if (filter.lt != null) {
    return (item: any) => get(item, filter.field) < filter.lt!
  } else if (filter.gte != null) {
    return (item: any) => get(item, filter.field) >= filter.gte!
  } else if (filter.lte != null) {
    return (item: any) => get(item, filter.field) <= filter.lte!
  } else if (filter.like != null) {
    return (item: any) => {
      const value = get(item, filter.field)
      const regExp = new RegExp(filter.like!, 'm');
      return regExp.test(value);
    }
  } else if (filter.in != null) {
    return (item: any) => filter.in?.includes(get(item, filter.field))
  } else if (filter.has != null) {
    return (item: any) => {
      const fieldItems = get(item, filter.field)

      if (fieldItems != null && fieldItems.length > 0) {
        return fieldItems.includes(filter.has)
      } else {
        return false
      }
    }
  } else if (filter.or != null) {
    return (item: any) => {
      const conditions = filter.or!

      for (let i = 0; i < conditions.length; i++) {
        const itemCompareResult = getComparator(conditions[i])(item)

        // just looking for the first true result
        if (itemCompareResult) {
          return true
        }
      }

      // not true responses found case
      return false
    }
  } else if (filter.and != null) {
    return (item: any) => {
      const conditions = filter.and!

      for (let i = 0; i < conditions.length; i++) {
        const itemCompareResult = getComparator(conditions[i])(item)

        // just looking for the first false result
        if (!itemCompareResult) {
          return false
        }
      }

      // not false responses found case
      return true
    }
  }

  throw new Error(`Not supported condition found: ${JSON.stringify(filter)}`)
}

function proceedFilter(data: Array<any>, filter: Filter) {
  return data.filter(getComparator(filter))
}

export default function filter(data: Array<any>, filter: any) {
  return proceedFilter(data, filter as Filter)
}
