import {Flags} from '@oclif/core'
import BaseCommand from '../../commons/base-command'

export default class WizardTuplesSpot extends BaseCommand {
  static description = 'Get list of spot wizard tuples'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    itemCount: Flags.integer({description: 'Return items count default 10000', required: false}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(WizardTuplesSpot)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get('flex/wizard-tuples-spot', params)
    this.printArray(flags, response.data)
  }
}
