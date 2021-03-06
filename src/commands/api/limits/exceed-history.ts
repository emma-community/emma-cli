import {Flags} from '@oclif/core'
import BaseCommand from '../../../commons/base-command'

export default class LimitsExceedHistory extends BaseCommand {
  static description = 'Get current project API payable requests count'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    startPeriodUnixTimestamp: Flags.integer({description: 'Start period for limits search (in unix timestamp)', required: true}),
    endPeriodUnixTimestamp: Flags.integer({description: 'End period for limits search (in unix timestamp)', required: true}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(LimitsExceedHistory)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get('rate/limits/exceed/history', params)
    this.printObject(flags, response.data)
  }
}
