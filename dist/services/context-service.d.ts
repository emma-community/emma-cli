import StateService from './state-service';
import PublicApiService from './public-api-service';
import AuthorizationService from './authorization-service';
export default class ContextService {
    stateService: StateService;
    publicApiService: PublicApiService;
    authorizationService: AuthorizationService;
    constructor();
}
