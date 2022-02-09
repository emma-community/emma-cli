import BaseCommand from '../../commons/base-command';
export default class Search extends BaseCommand {
    static description: string;
    static examples: string[];
    static flags: {
        json: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        yaml: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        term: import("@oclif/core/lib/interfaces").OptionFlag<string>;
    };
    static args: never[];
    run(): Promise<any>;
}
