/*
dots api

Scalable and Flexible Payouts Infrastructure

The version of the OpenAPI document: 1.0
Contact: info@dots.dev

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Address of the user or their business.
 * @export
 * @interface UsersSubmitComplianceInfoRequestW9Address
 */
export interface UsersSubmitComplianceInfoRequestW9Address {
    /**
     * Address line 1.
     * @type {string}
     * @memberof UsersSubmitComplianceInfoRequestW9Address
     */
    'line_1': string;
    /**
     * Address Line 2
     * @type {string}
     * @memberof UsersSubmitComplianceInfoRequestW9Address
     */
    'line_2'?: string;
    /**
     * City.
     * @type {string}
     * @memberof UsersSubmitComplianceInfoRequestW9Address
     */
    'city': string;
    /**
     * State.
     * @type {string}
     * @memberof UsersSubmitComplianceInfoRequestW9Address
     */
    'state': string;
    /**
     * Country.
     * @type {string}
     * @memberof UsersSubmitComplianceInfoRequestW9Address
     */
    'country': string;
    /**
     * Postal code or Zip code.
     * @type {string}
     * @memberof UsersSubmitComplianceInfoRequestW9Address
     */
    'postcode': string;
}

