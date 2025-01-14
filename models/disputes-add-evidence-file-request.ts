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
 * @interface DisputesAddEvidenceFileRequest
 */
export interface DisputesAddEvidenceFileRequest {
    /**
     * 
     * @type {string}
     * @memberof DisputesAddEvidenceFileRequest
     */
    'type'?: DisputesAddEvidenceFileRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof DisputesAddEvidenceFileRequest
     */
    'content'?: string;
}

type DisputesAddEvidenceFileRequestTypeEnum = 'customer_communications' | 'refund_policy' | 'cancellation_policy' | 'customer_signature' | 'receipt' | 'service_documentation' | 'duplicate_charge_documentation' | 'shipping_documentation' | 'uncategorized'


