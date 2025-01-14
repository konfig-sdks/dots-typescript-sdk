/* tslint:disable */
/* eslint-disable */
/*
dots api

Scalable and Flexible Payouts Infrastructure

The version of the OpenAPI document: 1.0
Contact: info@dots.dev

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Flow } from '../models';
// @ts-ignore
import { FlowsCreateNewFlowRequest } from '../models';
// @ts-ignore
import { FlowsCreateNewFlowRequestStepsInner } from '../models';
// @ts-ignore
import { FlowsListAllResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * FlowsApi - axios parameter creator
 * @export
 */
export const FlowsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new Flow.
         * @summary Create a Flow
         * @param {FlowsCreateNewFlowRequest} [flowsCreateNewFlowRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewFlow: async (flowsCreateNewFlowRequest?: FlowsCreateNewFlowRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/flows`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: flowsCreateNewFlowRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/flows',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(flowsCreateNewFlowRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a Flow by its id.
         * @summary Retrieve a Flow
         * @param {string} flowId Id of the flow to fetch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (flowId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'flowId' is not null or undefined
            assertParamExists('getById', 'flowId', flowId)
            const localVarPath = `/v2/flows/{flow_id}`
                .replace(`{${"flow_id"}}`, encodeURIComponent(String(flowId !== undefined ? flowId : `-flow_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/flows/{flow_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all Flows.
         * @summary List all Flows
         * @param {number} [limit] A limit on the number of objects to be returned, between 1 and 100.
         * @param {string} [startingAfter] A cursor for use in pagination. &#x60;starting_after&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with &#x60;aaa&#x60;, your subsequent call can include &#x60;starting_after&#x60;&#x3D;&#x60;aaa&#x60; in order to fetch the next page of the list.
         * @param {string} [endingBefore] A cursor for use in pagination. &#x60;ending_before&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with &#x60;aaa&#x60;, your subsequent call can include &#x60;ending_before&#x60;&#x3D;&#x60;aaa&#x60; in order to fetch the previous page of the list.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll: async (limit?: number, startingAfter?: string, endingBefore?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/flows`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (startingAfter !== undefined) {
                localVarQueryParameter['starting_after'] = startingAfter;
            }

            if (endingBefore !== undefined) {
                localVarQueryParameter['ending_before'] = endingBefore;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/flows',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FlowsApi - functional programming interface
 * @export
 */
export const FlowsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FlowsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new Flow.
         * @summary Create a Flow
         * @param {FlowsApiCreateNewFlowRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewFlow(requestParameters: FlowsApiCreateNewFlowRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Flow>> {
            const flowsCreateNewFlowRequest: FlowsCreateNewFlowRequest = {
                steps: requestParameters.steps,
                user_id: requestParameters.user_id,
                metadata: requestParameters.metadata
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewFlow(flowsCreateNewFlowRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a Flow by its id.
         * @summary Retrieve a Flow
         * @param {FlowsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: FlowsApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Flow>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.flowId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all Flows.
         * @summary List all Flows
         * @param {FlowsApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAll(requestParameters: FlowsApiListAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FlowsListAllResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAll(requestParameters.limit, requestParameters.startingAfter, requestParameters.endingBefore, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FlowsApi - factory interface
 * @export
 */
export const FlowsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FlowsApiFp(configuration)
    return {
        /**
         * Create a new Flow.
         * @summary Create a Flow
         * @param {FlowsApiCreateNewFlowRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewFlow(requestParameters: FlowsApiCreateNewFlowRequest, options?: AxiosRequestConfig): AxiosPromise<Flow> {
            return localVarFp.createNewFlow(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a Flow by its id.
         * @summary Retrieve a Flow
         * @param {FlowsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: FlowsApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Flow> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List all Flows.
         * @summary List all Flows
         * @param {FlowsApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll(requestParameters: FlowsApiListAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<FlowsListAllResponse> {
            return localVarFp.listAll(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewFlow operation in FlowsApi.
 * @export
 * @interface FlowsApiCreateNewFlowRequest
 */
export type FlowsApiCreateNewFlowRequest = {
    
} & FlowsCreateNewFlowRequest

/**
 * Request parameters for getById operation in FlowsApi.
 * @export
 * @interface FlowsApiGetByIdRequest
 */
export type FlowsApiGetByIdRequest = {
    
    /**
    * Id of the flow to fetch
    * @type {string}
    * @memberof FlowsApiGetById
    */
    readonly flowId: string
    
}

/**
 * Request parameters for listAll operation in FlowsApi.
 * @export
 * @interface FlowsApiListAllRequest
 */
export type FlowsApiListAllRequest = {
    
    /**
    * A limit on the number of objects to be returned, between 1 and 100.
    * @type {number}
    * @memberof FlowsApiListAll
    */
    readonly limit?: number
    
    /**
    * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.
    * @type {string}
    * @memberof FlowsApiListAll
    */
    readonly startingAfter?: string
    
    /**
    * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.
    * @type {string}
    * @memberof FlowsApiListAll
    */
    readonly endingBefore?: string
    
}

/**
 * FlowsApiGenerated - object-oriented interface
 * @export
 * @class FlowsApiGenerated
 * @extends {BaseAPI}
 */
export class FlowsApiGenerated extends BaseAPI {
    /**
     * Create a new Flow.
     * @summary Create a Flow
     * @param {FlowsApiCreateNewFlowRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApiGenerated
     */
    public createNewFlow(requestParameters: FlowsApiCreateNewFlowRequest, options?: AxiosRequestConfig) {
        return FlowsApiFp(this.configuration).createNewFlow(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a Flow by its id.
     * @summary Retrieve a Flow
     * @param {FlowsApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApiGenerated
     */
    public getById(requestParameters: FlowsApiGetByIdRequest, options?: AxiosRequestConfig) {
        return FlowsApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all Flows.
     * @summary List all Flows
     * @param {FlowsApiListAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApiGenerated
     */
    public listAll(requestParameters: FlowsApiListAllRequest = {}, options?: AxiosRequestConfig) {
        return FlowsApiFp(this.configuration).listAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
