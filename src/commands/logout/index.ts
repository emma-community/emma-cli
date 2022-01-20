import constants from "../../utils/Constants";
import BaseCommand from "../../commons/BaseCommand";

export default class Logout extends BaseCommand {

  static description = 'Log out from emma platform'

  static examples = [
    `$ ${constants.cliName} logout`,
  ]

  static flags = {}

  static args = []

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Logout);

    await this.getContext().stateService.removeState();

    await this.printObject({}, `Successfully logout`);
  }
}
