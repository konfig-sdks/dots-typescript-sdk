/*
dots api

Scalable and Flexible Payouts Infrastructure

The version of the OpenAPI document: 1.0
Contact: info@dots.dev

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The payee. This is optional.
 * @export
 * @interface PayoutlinksCreatePayoutLinkRequestPayee
 */
export interface PayoutlinksCreatePayoutLinkRequestPayee {
    /**
     * First name of the payee.
     * @type {string}
     * @memberof PayoutlinksCreatePayoutLinkRequestPayee
     */
    'first_name'?: string;
    /**
     * Last name of the payee.
     * @type {string}
     * @memberof PayoutlinksCreatePayoutLinkRequestPayee
     */
    'last_name'?: string;
    /**
     * Country code of the payee\'s phone number e.g. \"1\" for USA.
     * @type {string}
     * @memberof PayoutlinksCreatePayoutLinkRequestPayee
     */
    'country_code'?: string;
    /**
     * Rest of the payee\'s phone number.
     * @type {string}
     * @memberof PayoutlinksCreatePayoutLinkRequestPayee
     */
    'phone_number'?: string;
    /**
     * Payee\'s email address.
     * @type {string}
     * @memberof PayoutlinksCreatePayoutLinkRequestPayee
     */
    'email'?: string;
}

