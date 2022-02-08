import BaseCommand from '../../commons/base-command';
export default class WizardTuplesSpot extends BaseCommand {
    static description: string;
    static examples: string[];
    static flags: {
        json: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        yaml: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        osFamily: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        osType: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        osVersion: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        locationsIds: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        providers: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        dcIds: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        minCpu: import("@oclif/core/lib/interfaces").OptionFlag<number | undefined>;
        maxCpu: import("@oclif/core/lib/interfaces").OptionFlag<number | undefined>;
        minRam: import("@oclif/core/lib/interfaces").OptionFlag<number | undefined>;
        maxRam: import("@oclif/core/lib/interfaces").OptionFlag<number | undefined>;
        minStorage: import("@oclif/core/lib/interfaces").OptionFlag<number | undefined>;
        maxStorage: import("@oclif/core/lib/interfaces").OptionFlag<number | undefined>;
    };
    static args: never[];
    run(): Promise<any>;
    getCommaSeparatedValues(line: string): string[];
    getOsWrapper(family: string, type: string, version: string): any;
    getMinMaxWrapper(min: number, max: number): any;
}
