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
 * @interface BusinessComplianceInfoContactInfo
 */
export interface BusinessComplianceInfoContactInfo {
    /**
     * 
     * @type {string}
     * @memberof BusinessComplianceInfoContactInfo
     */
    'city': string;
    /**
     * Country name or country code
     * @type {string}
     * @memberof BusinessComplianceInfoContactInfo
     */
    'country': string;
    /**
     * Primary contact email address. Service emails will be sent to this address.
     * @type {string}
     * @memberof BusinessComplianceInfoContactInfo
     */
    'email': string;
    /**
     * Address line 1
     * @type {string}
     * @memberof BusinessComplianceInfoContactInfo
     */
    'line1': string;
    /**
     * Address line 2
     * @type {string}
     * @memberof BusinessComplianceInfoContactInfo
     */
    'line2'?: string;
    /**
     * 
     * @type {string}
     * @memberof BusinessComplianceInfoContactInfo
     */
    'phone_number': string;
    /**
     * State when applicable
     * @type {string}
     * @memberof BusinessComplianceInfoContactInfo
     */
    'state': string;
    /**
     * ZIP or postal code
     * @type {string}
     * @memberof BusinessComplianceInfoContactInfo
     */
    'zip': string;
}

