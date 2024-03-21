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
 * @interface TransferExternalData
 */
export interface TransferExternalData {
    /**
     * 
     * @type {string}
     * @memberof TransferExternalData
     */
    'account_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferExternalData
     */
    'external_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferExternalData
     */
    'platform'?: TransferExternalDataPlatformEnum;
}

type TransferExternalDataPlatformEnum = 'ach' | 'paypal' | 'venmo' | 'visa' | 'amazon' | 'cash_app' | 'intl_bank' | 'intl_transfer' | 'bank_transfer' | 'payoneer' | 'airtm'

