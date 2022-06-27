import BaseCommand from './base-command'
import {get} from 'lodash'
import filter from './filter'
import order from './order'

export default abstract class TerraformResourceCommand extends BaseCommand {
  static args = [
    {name: 'operation', description: 'Id of operation', required: true},
    {name: 'state', description: 'State of resource', required: false},
  ]

  async run(): Promise<any> {
    const {args} = await this.parse(TerraformResourceCommand)

    // determinate operation that are sent
    const {operation, state} = args

    // get data
    if (process.env.data == null) {
      throw new Error('Please specify \'data\' env variable with resource specific values')
    }

    // call operation
    const data = JSON.parse(process.env.data)

    let result = {}
    switch (operation) {
    case 'create': {
      result = await this.create(data)

      break
    }

    case 'read': {
      result = await this.read(this.getState(state))

      break
    }

    case 'update': {
      result = await this.update(this.getState(state), data)

      break
    }

    case 'delete': {
      result = await this.delete(this.getState(state))

      break
    }

    default: {
      throw new Error('Operation not recognized. Use one of [create, read, update, delete]')
    }
    }

    // print result
    console.log(JSON.stringify(result))
  }

  async create(_data: any): Promise<any> {
    throw new Error('Not implemented \'create\' operation')
  }

  async read(_state: any): Promise<any> {
    throw new Error('Not implemented \'read\' operation')
  }

  async update(_state: any, _data: any): Promise<any> {
    throw new Error('Not implemented \'update\' operation')
  }

  async delete(_state: any): Promise<any> {
    throw new Error('Not implemented \'delete\' operation')
  }

  async wait(caller: () => Promise<any>, checker: (response: any) => Promise<any>, retriesCount = 100): Promise<any> {
    let isValid = false
    let isError = false
    let errorMessage = null
    let response = null
    const timeoutShift = 1000
    let timeoutMs = 0
    let tryCount = 0
    do {
      // wait for retry
      await this.timeout(timeoutMs)

      // call
      response = await caller()

      // check
      const validationResponse = await checker(response)
      isValid = validationResponse.isValid
      isError = validationResponse.isError
      errorMessage = validationResponse.errorMessage
      timeoutMs += timeoutShift
      tryCount++
    } while (!isError && !isValid && tryCount < retriesCount)

    if (isError) {
      throw new Error(`Can not proceed execution of function. Error: ${errorMessage}`)
    }

    if (!isValid) {
      throw new Error('Can not proceed execution of function. Tries are exceeded')
    }

    return response
  }

  getState(state: string): any {
    if (state == null) {
      throw new Error('The operation required to set \'state\' arg (the second arg)')
    }

    return JSON.parse(state)
  }

  validateValue(data: any, path: string) {
    const value = get(data, path)
    if (value == null || `${value}`.trim() === '') {
      throw new Error(`Env variable ${path} is empty`)
    }
  }

  validateEnum(data: any, path: string, values: Array<string>) {
    const value = get(data, path)

    if (!values.includes(value)) {
      throw new Error(`Env variable ${path} should be one of ${JSON.stringify(values)}`)
    }
  }

  timeout(ms: number) {
    if (ms === 0) {
      return
    }

    return new Promise(resolve => setTimeout(resolve, ms))
  }

  filter(data: any, filterDefinition: any) {
    return filter(data, filterDefinition)
  }

  order(data: any, orderDefinition: any) {
    return order(data, orderDefinition)
  }
}