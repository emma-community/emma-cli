import BaseCommand from '../../commons/base-command';
export default class WizardTuplesSpot extends BaseCommand {
    static description: string;
    static examples: string[];
    static flags: {
        json: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        yaml: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        itemCount: import("@oclif/core/lib/interfaces").OptionFlag<number | undefined>;
    };
    static args: never[];
    run(): Promise<any>;
}
