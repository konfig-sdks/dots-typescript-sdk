/*
dots api

Scalable and Flexible Payouts Infrastructure

The version of the OpenAPI document: 1.0
Contact: info@dots.dev

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The payee\'s phone number. `user_id` or `payee` is required.
 * @export
 * @interface PayoutsSendPayoutRequestPayee
 */
export interface PayoutsSendPayoutRequestPayee {
    /**
     * Country code of the payee\'s phone number e.g. \"1\" for USA.
     * @type {string}
     * @memberof PayoutsSendPayoutRequestPayee
     */
    'country_code': string;
    /**
     * Rest of the payee\'s phone number.
     * @type {string}
     * @memberof PayoutsSendPayoutRequestPayee
     */
    'phone_number': string;
}

