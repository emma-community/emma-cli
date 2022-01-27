import {Command} from "@oclif/core";
import {cli} from 'cli-ux'
import ContextService from "../services/ContextService";
import PublicApiService from "../services/PublicApiService";
const yaml = require('js-yaml');

export default abstract class BaseCommand extends Command {
  private contextService: ContextService | undefined;

  protected init(): Promise<any> {
    this.contextService = new ContextService();

    return super.init();
  }

  getContext(): ContextService {
    return this.contextService as ContextService;
  }

  getPublicApiService(): PublicApiService {
    return this.contextService?.publicApiService as PublicApiService;
  }

  printArray(flags: any, content: any, tableColumns: any | undefined): void {
    if (flags.json) {
      console.log(JSON.stringify(content, null, 2));
    } else if (flags.yaml) {
      console.log(yaml.dump(content));
    } else {
      // search for suitable data
      let data = [];

      if (Array.isArray(content)) {
        data = content;
      } else if (Array.isArray(content.content)) {
        data = content.content;
      } else if (Array.isArray(content.items)) {
        data = content.items;
      } else if (Array.isArray(content.projectApps)) {
        data = content.projectApps;
      } else if (Array.isArray(content.projectKubernetes)) {
        data = content.projectKubernetes;
      } else {
        throw new Error("Can not render response as a table. Try to use --json/--yaml flags")
      }
      const headerOptions = tableColumns != null ? tableColumns : this.getTableHeaders(data);
      cli.table(data, headerOptions, {printLine: console.log});
    }
  }

  printObject(flags: any, content: any): void {
    if (flags.json) {
      console.log(JSON.stringify(content, null, 2));
    } else if (flags.yaml) {
      console.log(yaml.dump(content));
    } else {
      console.log(content);
    }
  }

  getTableHeaders(content: Array<any>) {
    const keys: any = {};

    content.forEach(item => {
      Object.keys(item).forEach(key => {
        keys[key] = {header: key};
      })
    });

    return keys;
  }

  getParamsMap(flags: any) {
    const params: any = {};

    Object
      .keys(flags)
      .filter(key => key !== 'json')
      .filter(key => key !== 'yaml')
      .forEach(key => {
        params[key] = flags[key];
      });

    return params;
  }
}
