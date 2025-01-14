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
import { Dispute } from '../models';
// @ts-ignore
import { DisputesAddEvidenceFileRequest } from '../models';
// @ts-ignore
import { DisputesGetAllResponse } from '../models';
// @ts-ignore
import { DisputesSubmitDisputeRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * DisputesApi - axios parameter creator
 * @export
 */
export const DisputesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Add an evidence file to the dispute
         * @summary Add Evidence to a Dispute
         * @param {string} disputeId ID of the dispute to add evidence to
         * @param {string} [type] 
         * @param {string} [content] 
         * @param {DisputesAddEvidenceFileRequest} [disputesAddEvidenceFileRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addEvidenceFile: async (disputeId: string, type?: string, content?: string, disputesAddEvidenceFileRequest?: DisputesAddEvidenceFileRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'disputeId' is not null or undefined
            assertParamExists('addEvidenceFile', 'disputeId', disputeId)
            const localVarPath = `/v2/disputes/{dispute_id}/evidence`
                .replace(`{${"dispute_id"}}`, encodeURIComponent(String(disputeId !== undefined ? disputeId : `-dispute_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();
            const addFormParam = async (name: string, data: any, isBinary: boolean, isPrimitiveType: boolean) => {
                if (isBinary) {
                    if (data instanceof Uint8Array) {
                        // Handle Buffer data
                        const filetype = await fromBuffer(data)
                        const filename = filetype === undefined ? name : `${name}.${filetype.ext}`
                        localVarFormParams.append(name, data as any, filename);
                    } else if ("name" in data) {
                        // File instances in browsers and Node.js have the
                        // "name" property "Duck typing" files to handle browser
                        // File class or Node.js File class
                        // Web: https://developer.mozilla.org/en-US/docs/Web/API/File
                        // Node.js: https://nodejs.org/api/buffer.html#new-bufferfilesources-filename-options
                        if (isBrowser()) {
                            // FormData in browser can accept File/Blob directly
                            localVarFormParams.append(name, data, data.name);
                        } else {
                            // FormData in Node.js can only accept raw Buffer so convert before passing
                            const bytes = await data.arrayBuffer()
                            const buffer = Buffer.from(bytes)
                            localVarFormParams.append(name, buffer, data.name);
                        }
                    }
                } else {
                    if (isPrimitiveType) {
                        /**
                         * FormData can only accept string or Blob so we need to convert
                         * non-string primitives to string. We also need to convert
                         */
                        if (typeof data === "object") {
                          localVarFormParams.append(name, JSON.stringify(data));
                        } else {
                          localVarFormParams.append(name, data);
                        }
                    } else {
                        if (isBrowser()) {
                            localVarFormParams.append(name, new Blob([JSON.stringify(data)], { type: "application/json" }))
                        } else {
                            localVarFormParams.append(name, JSON.stringify(data), { type: "application/json", filename: "data.json" });
                        }
                    }
                }
            }
            if (!isBrowser()) Object.assign(localVarHeaderParameter, localVarFormParams.getHeaders());

            // authentication api_key required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            if (type !== undefined) {
                await addFormParam('type', type, false, true)
            }
    
            if (content !== undefined) {
                await addFormParam('content', content, false, true)
            }
    
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;
            requestBeforeHook({
                requestBody: disputesAddEvidenceFileRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/disputes/{dispute_id}/evidence',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all disputes
         * @summary List all Disputes
         * @param {string} [limit] A limit on the number of objects to be returned, between 1 and 100.
         * @param {string} [startingAfter] A cursor for use in pagination. &#x60;starting_after&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with &#x60;aaa&#x60;, your subsequent call can include &#x60;starting_after&#x60;&#x3D;&#x60;aaa&#x60; in order to fetch the next page of the list.
         * @param {string} [endingBefore] A cursor for use in pagination. &#x60;ending_before&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with &#x60;aaa&#x60;, your subsequent call can include &#x60;ending_before&#x60;&#x3D;&#x60;aaa&#x60; in order to fetch the previous page of the list.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (limit?: string, startingAfter?: string, endingBefore?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/disputes`;
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
                pathTemplate: '/v2/disputes',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retreieve a dispute by its ID
         * @summary Retrieve a Dispute
         * @param {string} disputeId ID of the dispute to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (disputeId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'disputeId' is not null or undefined
            assertParamExists('getById', 'disputeId', disputeId)
            const localVarPath = `/v2/disputes/{dispute_id}`
                .replace(`{${"dispute_id"}}`, encodeURIComponent(String(disputeId !== undefined ? disputeId : `-dispute_id-`)));
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
                pathTemplate: '/v2/disputes/{dispute_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Submit a dispute
         * @summary Submit a Dispute
         * @param {string} disputeId ID of the dispute to submit
         * @param {DisputesSubmitDisputeRequest} [disputesSubmitDisputeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitDispute: async (disputeId: string, disputesSubmitDisputeRequest?: DisputesSubmitDisputeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'disputeId' is not null or undefined
            assertParamExists('submitDispute', 'disputeId', disputeId)
            const localVarPath = `/v2/disputes/{dispute_id}/submit`
                .replace(`{${"dispute_id"}}`, encodeURIComponent(String(disputeId !== undefined ? disputeId : `-dispute_id-`)));
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
                requestBody: disputesSubmitDisputeRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/disputes/{dispute_id}/submit',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(disputesSubmitDisputeRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DisputesApi - functional programming interface
 * @export
 */
export const DisputesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DisputesApiAxiosParamCreator(configuration)
    return {
        /**
         * Add an evidence file to the dispute
         * @summary Add Evidence to a Dispute
         * @param {DisputesApiAddEvidenceFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addEvidenceFile(requestParameters: DisputesApiAddEvidenceFileRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const disputesAddEvidenceFileRequest: DisputesAddEvidenceFileRequest = {
                type: requestParameters.type,
                content: requestParameters.content
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.addEvidenceFile(requestParameters.disputeId, requestParameters.type, requestParameters.content, disputesAddEvidenceFileRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all disputes
         * @summary List all Disputes
         * @param {DisputesApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(requestParameters: DisputesApiGetAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DisputesGetAllResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(requestParameters.limit, requestParameters.startingAfter, requestParameters.endingBefore, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retreieve a dispute by its ID
         * @summary Retrieve a Dispute
         * @param {DisputesApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: DisputesApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Dispute>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.disputeId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Submit a dispute
         * @summary Submit a Dispute
         * @param {DisputesApiSubmitDisputeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitDispute(requestParameters: DisputesApiSubmitDisputeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const disputesSubmitDisputeRequest: DisputesSubmitDisputeRequest = {
                description: requestParameters.description
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.submitDispute(requestParameters.disputeId, disputesSubmitDisputeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DisputesApi - factory interface
 * @export
 */
export const DisputesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DisputesApiFp(configuration)
    return {
        /**
         * Add an evidence file to the dispute
         * @summary Add Evidence to a Dispute
         * @param {DisputesApiAddEvidenceFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addEvidenceFile(requestParameters: DisputesApiAddEvidenceFileRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.addEvidenceFile(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List all disputes
         * @summary List all Disputes
         * @param {DisputesApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(requestParameters: DisputesApiGetAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<DisputesGetAllResponse> {
            return localVarFp.getAll(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retreieve a dispute by its ID
         * @summary Retrieve a Dispute
         * @param {DisputesApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: DisputesApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Dispute> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Submit a dispute
         * @summary Submit a Dispute
         * @param {DisputesApiSubmitDisputeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitDispute(requestParameters: DisputesApiSubmitDisputeRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.submitDispute(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addEvidenceFile operation in DisputesApi.
 * @export
 * @interface DisputesApiAddEvidenceFileRequest
 */
export type DisputesApiAddEvidenceFileRequest = {
    
    /**
    * ID of the dispute to add evidence to
    * @type {string}
    * @memberof DisputesApiAddEvidenceFile
    */
    readonly disputeId: string
    
    /**
    * 
    * @type {string}
    * @memberof DisputesApiAddEvidenceFile
    */
    readonly type?: string
    
    /**
    * 
    * @type {string}
    * @memberof DisputesApiAddEvidenceFile
    */
    readonly content?: string
    
} & DisputesAddEvidenceFileRequest

/**
 * Request parameters for getAll operation in DisputesApi.
 * @export
 * @interface DisputesApiGetAllRequest
 */
export type DisputesApiGetAllRequest = {
    
    /**
    * A limit on the number of objects to be returned, between 1 and 100.
    * @type {string}
    * @memberof DisputesApiGetAll
    */
    readonly limit?: string
    
    /**
    * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.
    * @type {string}
    * @memberof DisputesApiGetAll
    */
    readonly startingAfter?: string
    
    /**
    * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.
    * @type {string}
    * @memberof DisputesApiGetAll
    */
    readonly endingBefore?: string
    
}

/**
 * Request parameters for getById operation in DisputesApi.
 * @export
 * @interface DisputesApiGetByIdRequest
 */
export type DisputesApiGetByIdRequest = {
    
    /**
    * ID of the dispute to retrieve
    * @type {string}
    * @memberof DisputesApiGetById
    */
    readonly disputeId: string
    
}

/**
 * Request parameters for submitDispute operation in DisputesApi.
 * @export
 * @interface DisputesApiSubmitDisputeRequest
 */
export type DisputesApiSubmitDisputeRequest = {
    
    /**
    * ID of the dispute to submit
    * @type {string}
    * @memberof DisputesApiSubmitDispute
    */
    readonly disputeId: string
    
} & DisputesSubmitDisputeRequest

/**
 * DisputesApiGenerated - object-oriented interface
 * @export
 * @class DisputesApiGenerated
 * @extends {BaseAPI}
 */
export class DisputesApiGenerated extends BaseAPI {
    /**
     * Add an evidence file to the dispute
     * @summary Add Evidence to a Dispute
     * @param {DisputesApiAddEvidenceFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DisputesApiGenerated
     */
    public addEvidenceFile(requestParameters: DisputesApiAddEvidenceFileRequest, options?: AxiosRequestConfig) {
        return DisputesApiFp(this.configuration).addEvidenceFile(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all disputes
     * @summary List all Disputes
     * @param {DisputesApiGetAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DisputesApiGenerated
     */
    public getAll(requestParameters: DisputesApiGetAllRequest = {}, options?: AxiosRequestConfig) {
        return DisputesApiFp(this.configuration).getAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retreieve a dispute by its ID
     * @summary Retrieve a Dispute
     * @param {DisputesApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DisputesApiGenerated
     */
    public getById(requestParameters: DisputesApiGetByIdRequest, options?: AxiosRequestConfig) {
        return DisputesApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Submit a dispute
     * @summary Submit a Dispute
     * @param {DisputesApiSubmitDisputeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DisputesApiGenerated
     */
    public submitDispute(requestParameters: DisputesApiSubmitDisputeRequest, options?: AxiosRequestConfig) {
        return DisputesApiFp(this.configuration).submitDispute(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
