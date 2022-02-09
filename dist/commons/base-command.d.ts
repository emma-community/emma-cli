import { Command } from '@oclif/core';
import ContextService from '../services/context-service';
import PublicApiService from '../services/public-api-service';
export default abstract class BaseCommand extends Command {
    private contextService;
    protected init(): Promise<any>;
    getContext(): ContextService;
    getPublicApiService(): PublicApiService;
    printArray(flags: any, content: any): void;
    printObject(flags: any, content: any): void;
    getTableHeaders(content: Array<any>): any;
    getParamsMap(flags: any): any;
}
