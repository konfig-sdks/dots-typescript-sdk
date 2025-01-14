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
import { CheckoutSession } from '../models';
// @ts-ignore
import { CheckoutsessionsCreateSessionRequest } from '../models';
// @ts-ignore
import { CheckoutsessionsCreateSessionRequestLineItemsInner } from '../models';
// @ts-ignore
import { CheckoutsessionsListAllResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CheckoutSessionsApi - axios parameter creator
 * @export
 */
export const CheckoutSessionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a checkout session
         * @summary Create a Checkout Session
         * @param {CheckoutsessionsCreateSessionRequest} [checkoutsessionsCreateSessionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSession: async (checkoutsessionsCreateSessionRequest?: CheckoutsessionsCreateSessionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/checkout-sessions`;
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
                requestBody: checkoutsessionsCreateSessionRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/checkout-sessions',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(checkoutsessionsCreateSessionRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a checkout session by an ID
         * @summary Retrieve a Checkout Session
         * @param {string} checkoutSessionId ID of the checkout session to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (checkoutSessionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'checkoutSessionId' is not null or undefined
            assertParamExists('getById', 'checkoutSessionId', checkoutSessionId)
            const localVarPath = `/v2/checkout-sessions/{checkout_session_id}`
                .replace(`{${"checkout_session_id"}}`, encodeURIComponent(String(checkoutSessionId !== undefined ? checkoutSessionId : `-checkout_session_id-`)));
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
                pathTemplate: '/v2/checkout-sessions/{checkout_session_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all checkout sessions
         * @summary List all Checkout Sessions
         * @param {string} [limit] A limit on the number of objects to be returned, between 1 and 100.
         * @param {string} [startingAfter] A cursor for use in pagination. &#x60;starting_after&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with &#x60;aaa&#x60;, your subsequent call can include &#x60;starting_after&#x60;&#x3D;&#x60;aaa&#x60; in order to fetch the next page of the list.
         * @param {string} [endingBefore] A cursor for use in pagination. &#x60;ending_before&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with &#x60;aaa&#x60;, your subsequent call can include &#x60;ending_before&#x60;&#x3D;&#x60;aaa&#x60; in order to fetch the previous page of the list.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll: async (limit?: string, startingAfter?: string, endingBefore?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/checkout-sessions`;
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
                pathTemplate: '/v2/checkout-sessions',
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
 * CheckoutSessionsApi - functional programming interface
 * @export
 */
export const CheckoutSessionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CheckoutSessionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a checkout session
         * @summary Create a Checkout Session
         * @param {CheckoutSessionsApiCreateSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSession(requestParameters: CheckoutSessionsApiCreateSessionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CheckoutSession>> {
            const checkoutsessionsCreateSessionRequest: CheckoutsessionsCreateSessionRequest = {
                line_items: requestParameters.line_items,
                customer_email: requestParameters.customer_email,
                client_reference_id: requestParameters.client_reference_id,
                success_url: requestParameters.success_url,
                cancel_url: requestParameters.cancel_url,
                mode: requestParameters.mode,
                user_id: requestParameters.user_id,
                customer_id: requestParameters.customer_id,
                expires_in: requestParameters.expires_in,
                metadata: requestParameters.metadata
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSession(checkoutsessionsCreateSessionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve a checkout session by an ID
         * @summary Retrieve a Checkout Session
         * @param {CheckoutSessionsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: CheckoutSessionsApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CheckoutSession>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.checkoutSessionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all checkout sessions
         * @summary List all Checkout Sessions
         * @param {CheckoutSessionsApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAll(requestParameters: CheckoutSessionsApiListAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CheckoutsessionsListAllResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAll(requestParameters.limit, requestParameters.startingAfter, requestParameters.endingBefore, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CheckoutSessionsApi - factory interface
 * @export
 */
export const CheckoutSessionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CheckoutSessionsApiFp(configuration)
    return {
        /**
         * Create a checkout session
         * @summary Create a Checkout Session
         * @param {CheckoutSessionsApiCreateSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSession(requestParameters: CheckoutSessionsApiCreateSessionRequest, options?: AxiosRequestConfig): AxiosPromise<CheckoutSession> {
            return localVarFp.createSession(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a checkout session by an ID
         * @summary Retrieve a Checkout Session
         * @param {CheckoutSessionsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: CheckoutSessionsApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<CheckoutSession> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List all checkout sessions
         * @summary List all Checkout Sessions
         * @param {CheckoutSessionsApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll(requestParameters: CheckoutSessionsApiListAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<CheckoutsessionsListAllResponse> {
            return localVarFp.listAll(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createSession operation in CheckoutSessionsApi.
 * @export
 * @interface CheckoutSessionsApiCreateSessionRequest
 */
export type CheckoutSessionsApiCreateSessionRequest = {
    
} & CheckoutsessionsCreateSessionRequest

/**
 * Request parameters for getById operation in CheckoutSessionsApi.
 * @export
 * @interface CheckoutSessionsApiGetByIdRequest
 */
export type CheckoutSessionsApiGetByIdRequest = {
    
    /**
    * ID of the checkout session to retrieve
    * @type {string}
    * @memberof CheckoutSessionsApiGetById
    */
    readonly checkoutSessionId: string
    
}

/**
 * Request parameters for listAll operation in CheckoutSessionsApi.
 * @export
 * @interface CheckoutSessionsApiListAllRequest
 */
export type CheckoutSessionsApiListAllRequest = {
    
    /**
    * A limit on the number of objects to be returned, between 1 and 100.
    * @type {string}
    * @memberof CheckoutSessionsApiListAll
    */
    readonly limit?: string
    
    /**
    * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.
    * @type {string}
    * @memberof CheckoutSessionsApiListAll
    */
    readonly startingAfter?: string
    
    /**
    * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.
    * @type {string}
    * @memberof CheckoutSessionsApiListAll
    */
    readonly endingBefore?: string
    
}

/**
 * CheckoutSessionsApiGenerated - object-oriented interface
 * @export
 * @class CheckoutSessionsApiGenerated
 * @extends {BaseAPI}
 */
export class CheckoutSessionsApiGenerated extends BaseAPI {
    /**
     * Create a checkout session
     * @summary Create a Checkout Session
     * @param {CheckoutSessionsApiCreateSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CheckoutSessionsApiGenerated
     */
    public createSession(requestParameters: CheckoutSessionsApiCreateSessionRequest, options?: AxiosRequestConfig) {
        return CheckoutSessionsApiFp(this.configuration).createSession(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a checkout session by an ID
     * @summary Retrieve a Checkout Session
     * @param {CheckoutSessionsApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CheckoutSessionsApiGenerated
     */
    public getById(requestParameters: CheckoutSessionsApiGetByIdRequest, options?: AxiosRequestConfig) {
        return CheckoutSessionsApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all checkout sessions
     * @summary List all Checkout Sessions
     * @param {CheckoutSessionsApiListAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CheckoutSessionsApiGenerated
     */
    public listAll(requestParameters: CheckoutSessionsApiListAllRequest = {}, options?: AxiosRequestConfig) {
        return CheckoutSessionsApiFp(this.configuration).listAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
