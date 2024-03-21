/*
dots api

Scalable and Flexible Payouts Infrastructure

The version of the OpenAPI document: 1.0
Contact: info@dots.dev

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Transfer } from './transfer';

/**
 * 
 * @export
 * @interface TransfersGetAllResponse
 */
export interface TransfersGetAllResponse {
    /**
     * `true` if there are more `transfers`.
     * @type {boolean}
     * @memberof TransfersGetAllResponse
     */
    'has_more'?: boolean;
    /**
     * Array of `transfers`.
     * @type {Array<Transfer>}
     * @memberof TransfersGetAllResponse
     */
    'data'?: Array<Transfer>;
}

