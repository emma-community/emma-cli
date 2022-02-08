"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const constants_1 = require("../../utils/constants");
const base_command_1 = require("../../commons/base-command");
class WizardTuplesSpot extends base_command_1.default {
    async run() {
        const { flags } = await this.parse(WizardTuplesSpot);
        const params = this.getParamsMap(flags);
        const publicApiService = this.getPublicApiService();
        const request = {
            os: this.getOsWrapper(params.osFamily, params.osType, params.osVersion),
            locations: this.getCommaSeparatedValues(params.locationsIds),
            providers: this.getCommaSeparatedValues(params.providers),
            dcIds: this.getCommaSeparatedValues(params.dcIds),
            cpu: this.getMinMaxWrapper(params.minCpu, params.maxCpu),
            ram: this.getMinMaxWrapper(params.minRam, params.maxRam),
            storage: this.getMinMaxWrapper(params.minStorage, params.maxStorage),
        };
        const response = await publicApiService.post('flex/wizard-tuples-advanced', request, {});
        this.printArray(flags, response.data);
    }
    getCommaSeparatedValues(line) {
        if (line == null) {
            return [];
        }
        return line.split(',').map(item => item.trim());
    }
    getOsWrapper(family, type, version) {
        if (family == null && type == null && version == null) {
            return undefined;
        }
        return [{ family, type, version }];
    }
    getMinMaxWrapper(min, max) {
        if (min == null && max == null) {
            return undefined;
        }
        return { min, max };
    }
}
exports.default = WizardTuplesSpot;
WizardTuplesSpot.description = 'Get list of spot wizard tuples';
WizardTuplesSpot.examples = [
    `$ ${constants_1.default.cliName} flex wizard-tuples-spot`,
];
WizardTuplesSpot.flags = {
    json: core_1.Flags.boolean({ description: 'Print a json output', required: false }),
    yaml: core_1.Flags.boolean({ description: 'Print a yaml output', required: false }),
    osFamily: core_1.Flags.string({ description: 'OS family filter', required: false }),
    osType: core_1.Flags.string({ description: 'OS type filter', required: false }),
    osVersion: core_1.Flags.string({ description: 'OS version filter', required: false }),
    locationsIds: core_1.Flags.string({ description: 'Coma separated location ids filter', required: false }),
    providers: core_1.Flags.string({ description: 'Coma separated provider names filter', required: false }),
    dcIds: core_1.Flags.string({ description: 'Coma separated dc ids filter', required: false }),
    minCpu: core_1.Flags.integer({ description: 'Min cpu filter', required: false }),
    maxCpu: core_1.Flags.integer({ description: 'Max cpu filter', required: false }),
    minRam: core_1.Flags.integer({ description: 'Min ram filter', required: false }),
    maxRam: core_1.Flags.integer({ description: 'Max ram filter', required: false }),
    minStorage: core_1.Flags.integer({ description: 'Min storage filter', required: false }),
    maxStorage: core_1.Flags.integer({ description: 'Max storage filter', required: false }),
};
WizardTuplesSpot.args = [];
