import BaseCommand from '../commons/base-command'
import {Help} from '@oclif/core'

export default class HelpWrapper extends BaseCommand {
  static hidden = true

  async run(): Promise<any> {
    const topicName = this.argv[0]

    // print command not found
    this.printObject({}, 'The command is incomplete. Please check command usage:\n')

    // if topic name provided
    if (topicName) {
      const help = new Help(this.config)

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await help.showTopicHelp({name: topicName})
    }
  }
}
