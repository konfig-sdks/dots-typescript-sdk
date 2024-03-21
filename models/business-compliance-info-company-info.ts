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
 * @interface BusinessComplianceInfoCompanyInfo
 */
export interface BusinessComplianceInfoCompanyInfo {
    /**
     * Company DBA (Doing Business As)
     * @type {string}
     * @memberof BusinessComplianceInfoCompanyInfo
     */
    'dba'?: string;
    /**
     * Federal Employer Identification Number
     * @type {string}
     * @memberof BusinessComplianceInfoCompanyInfo
     */
    'ein': string;
    /**
     * Date of incorporation
     * @type {string}
     * @memberof BusinessComplianceInfoCompanyInfo
     */
    'incorporation_date': string;
    /**
     * State where incorporated
     * @type {string}
     * @memberof BusinessComplianceInfoCompanyInfo
     */
    'incorporation_state': string;
    /**
     * The legal classification of the company\'s incorporation
     * @type {string}
     * @memberof BusinessComplianceInfoCompanyInfo
     */
    'incorporation_type': BusinessComplianceInfoCompanyInfoIncorporationTypeEnum;
    /**
     * Company\'s legal name
     * @type {string}
     * @memberof BusinessComplianceInfoCompanyInfo
     */
    'name': string;
    /**
     * Company web address
     * @type {string}
     * @memberof BusinessComplianceInfoCompanyInfo
     */
    'website': string;
}

type BusinessComplianceInfoCompanyInfoIncorporationTypeEnum = 'sole_proprietorship' | 'partnership' | 'llc' | 'c_corporation' | 's_corporation'


