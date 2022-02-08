import BaseCommand from '../../commons/base-command';
export default class LimitsExceedHistory extends BaseCommand {
    static description: string;
    static examples: string[];
    static flags: {
        json: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        yaml: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        startPeriodUnixTimestamp: import("@oclif/core/lib/interfaces").OptionFlag<number>;
        endPeriodUnixTimestamp: import("@oclif/core/lib/interfaces").OptionFlag<number>;
        companyLimits: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
    };
    static args: never[];
    run(): Promise<any>;
}
