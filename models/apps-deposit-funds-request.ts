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
 * @interface AppsDepositFundsRequest
 */
export interface AppsDepositFundsRequest {
    /**
     * The amount to deposit in cents.
     * @type {number}
     * @memberof AppsDepositFundsRequest
     */
    'amount': number;
    /**
     * Idempotency key in UUID format.
     * @type {string}
     * @memberof AppsDepositFundsRequest
     */
    'idempotency_key'?: string;
}

