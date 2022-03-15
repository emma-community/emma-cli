import {Flags} from '@oclif/core'
import constants from '../../../utils/constants'
import BaseCommand from '../../../commons/base-command'

export default class WizardTuples extends BaseCommand {
  static description = 'Get list of wizard tuples'

  static examples = [
    `$ ${constants.cliName} flex wizard-tuples`,
  ]

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
  }

  static args = [
  ]

  async run(): Promise<any> {
    const {flags} = await this.parse(WizardTuples)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const response = await publicApiService.get('flex/wizard-tuples', params)
    this.printArray(flags, response.data)
  }
}
