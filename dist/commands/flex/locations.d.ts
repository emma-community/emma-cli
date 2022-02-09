import BaseCommand from '../../commons/base-command';
export default class Locations extends BaseCommand {
    static description: string;
    static examples: string[];
    static flags: {
        json: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        yaml: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        pageNumber: import("@oclif/core/lib/interfaces").OptionFlag<number | undefined>;
        itemCount: import("@oclif/core/lib/interfaces").OptionFlag<number | undefined>;
        sortBy: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        order: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
    };
    static args: {
        name: string;
        description: string;
        required: boolean;
    }[];
    run(): Promise<any>;
}
