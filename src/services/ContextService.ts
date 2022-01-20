import StateService from "./StateService";
import PublicApiService from "./PublicApiService";
import AuthorizationService from "./AuthorizationService";

export default class ContextService {
  public stateService: StateService;
  public publicApiService: PublicApiService;
  public authorizationService: AuthorizationService;

  constructor() {
    this.stateService = new StateService(this);
    this.publicApiService = new PublicApiService(this);
    this.authorizationService = new AuthorizationService(this);
  }
}
