import BaseCommand from '../../commons/base-command';
export default class CheckSpotPrice extends BaseCommand {
    static description: string;
    static examples: string[];
    static flags: {
        json: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        yaml: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        providerId: import("@oclif/core/lib/interfaces").OptionFlag<number>;
        bundleId: import("@oclif/core/lib/interfaces").OptionFlag<number>;
        dcId: import("@oclif/core/lib/interfaces").OptionFlag<number>;
        templateId: import("@oclif/core/lib/interfaces").OptionFlag<number>;
    };
    static args: never[];
    run(): Promise<any>;
}
