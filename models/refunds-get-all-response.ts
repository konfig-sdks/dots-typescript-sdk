/*
dots api

Scalable and Flexible Payouts Infrastructure

The version of the OpenAPI document: 1.0
Contact: info@dots.dev

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Refund } from './refund';

/**
 * 
 * @export
 * @interface RefundsGetAllResponse
 */
export interface RefundsGetAllResponse {
    /**
     * 
     * @type {boolean}
     * @memberof RefundsGetAllResponse
     */
    'has_more'?: boolean;
    /**
     * 
     * @type {Array<Refund>}
     * @memberof RefundsGetAllResponse
     */
    'data'?: Array<Refund>;
}
