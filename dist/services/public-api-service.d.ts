import ContextService from './context-service';
import { AxiosInstance, AxiosResponse } from 'axios';
import { State } from '../models/state';
export default class PublicApiService {
    private context;
    constructor(context: ContextService);
    postUnauthorized(state: State, path: string, request: any): Promise<AxiosResponse<any>>;
    get(path: string, queryParameters: any | undefined): Promise<AxiosResponse<any>>;
    post(path: string, request: any, queryParameters: any | undefined): Promise<AxiosResponse<any>>;
    put(path: string, request: any, queryParameters: any | undefined): Promise<AxiosResponse<any>>;
    patch(path: string, request: any, queryParameters: any | undefined): Promise<AxiosResponse<any>>;
    delete(path: string, queryParameters: any | undefined): Promise<AxiosResponse<any>>;
    getRestOfUrl(queryParameters: any | undefined): string;
    getAxios(): Promise<AxiosInstance>;
}
