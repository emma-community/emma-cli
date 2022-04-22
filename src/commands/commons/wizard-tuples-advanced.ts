import {Flags} from '@oclif/core'
import BaseCommand from '../../commons/base-command'

export default class WizardTuplesSpot extends BaseCommand {
  static description = 'Get list of spot wizard tuples'

  static flags = {
    json: Flags.boolean({description: 'Print a json output', required: false}),
    yaml: Flags.boolean({description: 'Print a yaml output', required: false}),
    osFamily: Flags.string({description: 'OS family filter', required: false}),
    osType: Flags.string({description: 'OS type filter', required: false}),
    osVersion: Flags.string({description: 'OS version filter', required: false}),
    locationsIds: Flags.string({description: 'Coma separated location ids filter', required: false}),
    providers: Flags.string({description: 'Coma separated provider names filter', required: false}),
    dcIds: Flags.string({description: 'Coma separated dc ids filter', required: false}),
    minCpu: Flags.integer({description: 'Min cpu filter', required: false}),
    maxCpu: Flags.integer({description: 'Max cpu filter', required: false}),
    minRam: Flags.integer({description: 'Min ram filter', required: false}),
    maxRam: Flags.integer({description: 'Max ram filter', required: false}),
    minStorage: Flags.integer({description: 'Min storage filter', required: false}),
    maxStorage: Flags.integer({description: 'Max storage filter', required: false}),
  }

  static args = []

  async run(): Promise<any> {
    const {flags} = await this.parse(WizardTuplesSpot)
    const params = this.getParamsMap(flags)
    const publicApiService = this.getPublicApiService()

    const request = {
      os: this.getOsWrapper(params.osFamily, params.osType, params.osVersion),
      locations: this.getCommaSeparatedValues(params.locationsIds),
      providers: this.getCommaSeparatedValues(params.providers),
      dcIds: this.getCommaSeparatedValues(params.dcIds),
      cpu: this.getMinMaxWrapper(params.minCpu, params.maxCpu),
      ram: this.getMinMaxWrapper(params.minRam, params.maxRam),
      storage: this.getMinMaxWrapper(params.minStorage, params.maxStorage),
    }

    const response = await publicApiService.post('flex/wizard-tuples-advanced', request, {})
    this.printArray(flags, response.data)
  }

  getCommaSeparatedValues(line: string) {
    if (line == null) {
      return []
    }

    return line.split(',').map(item => item.trim())
  }

  getOsWrapper(family: string, type: string, version: string): any {
    if (family == null && type == null && version == null) {
      return undefined
    }

    return [{family, type, version}]
  }

  getMinMaxWrapper(min: number, max: number): any {
    if (min == null && max == null) {
      return undefined
    }

    return {min, max}
  }
}
