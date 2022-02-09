import ContextService from './context-service';
import { Token } from '../models/token';
import { State } from '../models/state';
export default class AuthorizationService {
    private context;
    constructor(context: ContextService);
    getToken(): Promise<Token>;
    getTokenForState(state: State): Promise<Token>;
}
