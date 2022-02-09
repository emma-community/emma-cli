import BaseCommand from '../../../commons/base-command';
export default class StartVmOrder extends BaseCommand {
    static description: string;
    static examples: string[];
    static flags: {
        json: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        yaml: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        productId: import("@oclif/core/lib/interfaces").OptionFlag<number>;
    };
    static args: never[];
    run(): Promise<any>;
}
