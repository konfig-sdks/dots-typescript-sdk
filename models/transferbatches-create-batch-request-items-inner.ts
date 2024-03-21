/*
dots api

Scalable and Flexible Payouts Infrastructure

The version of the OpenAPI document: 1.0
Contact: info@dots.dev

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface TransferbatchesCreateBatchRequestItemsInner
 */
export interface TransferbatchesCreateBatchRequestItemsInner {
    /**
     * 
     * @type {number}
     * @memberof TransferbatchesCreateBatchRequestItemsInner
     */
    'amount'?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferbatchesCreateBatchRequestItemsInner
     */
    'user_id'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransferbatchesCreateBatchRequestItemsInner
     */
    'tax_exempt'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferbatchesCreateBatchRequestItemsInner
     */
    'allow_debit'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TransferbatchesCreateBatchRequestItemsInner
     */
    'idempotency_key'?: string;
    /**
     * 
     * @type {object}
     * @memberof TransferbatchesCreateBatchRequestItemsInner
     */
    'metadata'?: object;
}
