import BaseCommand from '../../commons/base-command';
export default class Login extends BaseCommand {
    static description: string;
    static examples: string[];
    static flags: {
        clientId: import("@oclif/core/lib/interfaces").OptionFlag<string>;
        clientSecret: import("@oclif/core/lib/interfaces").OptionFlag<string>;
        baseUrl: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        avatarCode: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
    };
    static args: never[];
    run(): Promise<any>;
}
