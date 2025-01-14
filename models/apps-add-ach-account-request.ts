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
 * @interface AppsAddAchAccountRequest
 */
export interface AppsAddAchAccountRequest {
    /**
     * The bank account number.
     * @type {string}
     * @memberof AppsAddAchAccountRequest
     */
    'account_number': string;
    /**
     * The bank\'s ABA routing number.
     * @type {string}
     * @memberof AppsAddAchAccountRequest
     */
    'routing_number': string;
    /**
     * The type of bank account.
     * @type {string}
     * @memberof AppsAddAchAccountRequest
     */
    'account_type': AppsAddAchAccountRequestAccountTypeEnum;
}

type AppsAddAchAccountRequestAccountTypeEnum = 'checking' | 'savings'


