import BaseCommand from '../../commons/base-command';
export default class Ssh extends BaseCommand {
    static description: string;
    static examples: string[];
    static flags: {
        json: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        yaml: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
    };
    static args: never[];
    run(): Promise<any>;
}
