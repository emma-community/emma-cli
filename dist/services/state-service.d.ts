import { State } from '../models/state';
import ContextService from './context-service';
export default class StateService {
    private context;
    constructor(context: ContextService);
    envVarsAreSet(): boolean;
    stateFileExists(): boolean;
    getState(): Promise<State>;
    setState(clientId: string, clientSecret: string, baseUrlOpt: string | undefined, avatarCodeOpt: string | undefined): Promise<State>;
    removeState(): Promise<void>;
}
