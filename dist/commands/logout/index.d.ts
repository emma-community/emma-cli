import BaseCommand from '../../commons/base-command';
export default class Logout extends BaseCommand {
    static description: string;
    static examples: string[];
    static flags: {};
    static args: never[];
    run(): Promise<any>;
}
