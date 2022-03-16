import BaseCommand from '../../commons/base-command'

export default class Logout extends BaseCommand {
  static description = 'Log out from emma platform'

  static flags = {}

  static args = []

  async run(): Promise<any> {
    await this.getContext().stateService.removeState()

    await this.printObject({}, 'Successfully logout')
  }
}
