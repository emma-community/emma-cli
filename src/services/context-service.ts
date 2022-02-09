import StateService from './state-service'
import PublicApiService from './public-api-service'
import AuthorizationService from './authorization-service'

export default class ContextService {
  public stateService: StateService;
  public publicApiService: PublicApiService;
  public authorizationService: AuthorizationService;

  constructor() {
    this.stateService = new StateService(this)
    this.publicApiService = new PublicApiService(this)
    this.authorizationService = new AuthorizationService(this)
  }
}
