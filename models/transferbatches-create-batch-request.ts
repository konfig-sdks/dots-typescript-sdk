/*
dots api

Scalable and Flexible Payouts Infrastructure

The version of the OpenAPI document: 1.0
Contact: info@dots.dev

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TransferbatchesCreateBatchRequestItemsInner } from './transferbatches-create-batch-request-items-inner';

/**
 * 
 * @export
 * @interface TransferbatchesCreateBatchRequest
 */
export interface TransferbatchesCreateBatchRequest {
    /**
     * 
     * @type {Array<TransferbatchesCreateBatchRequestItemsInner>}
     * @memberof TransferbatchesCreateBatchRequest
     */
    'items'?: Array<TransferbatchesCreateBatchRequestItemsInner>;
    /**
     * 
     * @type {string}
     * @memberof TransferbatchesCreateBatchRequest
     */
    'idempotency_key'?: string;
    /**
     * 
     * @type {object}
     * @memberof TransferbatchesCreateBatchRequest
     */
    'metadata'?: object;
}

