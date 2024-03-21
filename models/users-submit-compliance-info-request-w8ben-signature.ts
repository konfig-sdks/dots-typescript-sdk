/*
dots api

Scalable and Flexible Payouts Infrastructure

The version of the OpenAPI document: 1.0
Contact: info@dots.dev

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Signature of the user.
 * @export
 * @interface UsersSubmitComplianceInfoRequestW8benSignature
 */
export interface UsersSubmitComplianceInfoRequestW8benSignature {
    /**
     * The consent of the beneficial owner to the disclosure of their information to the IRS.
     * @type {boolean}
     * @memberof UsersSubmitComplianceInfoRequestW8benSignature
     */
    'consent': boolean;
    /**
     * The name of the person signing the form.
     * @type {string}
     * @memberof UsersSubmitComplianceInfoRequestW8benSignature
     */
    'name': string;
    /**
     * The email address of the person signing the form.
     * @type {string}
     * @memberof UsersSubmitComplianceInfoRequestW8benSignature
     */
    'email': string;
}

