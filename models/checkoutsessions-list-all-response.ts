/*
dots api

Scalable and Flexible Payouts Infrastructure

The version of the OpenAPI document: 1.0
Contact: info@dots.dev

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CheckoutSession } from './checkout-session';

/**
 * 
 * @export
 * @interface CheckoutsessionsListAllResponse
 */
export interface CheckoutsessionsListAllResponse {
    /**
     * `true` if there are more objects.
     * @type {boolean}
     * @memberof CheckoutsessionsListAllResponse
     */
    'has_more'?: boolean;
    /**
     * 
     * @type {Array<CheckoutSession>}
     * @memberof CheckoutsessionsListAllResponse
     */
    'data'?: Array<CheckoutSession>;
}

