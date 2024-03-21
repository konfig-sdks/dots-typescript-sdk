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
 * @interface UserCompliance
 */
export interface UserCompliance {
    /**
     * 
     * @type {boolean}
     * @memberof UserCompliance
     */
    'tax_id_collected'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserCompliance
     */
    'address_collected'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserCompliance
     */
    'date_of_birth_collected'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserCompliance
     */
    'must_collect_1099'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserCompliance
     */
    '1099_collected'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserCompliance
     */
    'w8_ben_collected'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserCompliance
     */
    'flagged'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserCompliance
     */
    'id_verified'?: boolean;
}
