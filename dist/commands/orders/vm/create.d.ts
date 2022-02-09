import BaseCommand from '../../../commons/base-command';
export default class CreateVmOrder extends BaseCommand {
    static description: string;
    static examples: string[];
    static flags: {
        json: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        yaml: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        providerId: import("@oclif/core/lib/interfaces").OptionFlag<number>;
        locationId: import("@oclif/core/lib/interfaces").OptionFlag<number>;
        bundleId: import("@oclif/core/lib/interfaces").OptionFlag<number>;
        cloudType: import("@oclif/core/lib/interfaces").OptionFlag<string>;
        templateId: import("@oclif/core/lib/interfaces").OptionFlag<number>;
        dcId: import("@oclif/core/lib/interfaces").OptionFlag<number>;
        sshId: import("@oclif/core/lib/interfaces").OptionFlag<number>;
        cloudNetworkType: import("@oclif/core/lib/interfaces").OptionFlag<string>;
        username: import("@oclif/core/lib/interfaces").OptionFlag<string>;
        hostname: import("@oclif/core/lib/interfaces").OptionFlag<string>;
    };
    static args: never[];
    run(): Promise<any>;
}
