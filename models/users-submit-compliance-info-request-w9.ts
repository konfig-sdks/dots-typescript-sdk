/*
dots api

Scalable and Flexible Payouts Infrastructure

The version of the OpenAPI document: 1.0
Contact: info@dots.dev

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UsersSubmitComplianceInfoRequestW9Address } from './users-submit-compliance-info-request-w9-address';

/**
 * W-9 equivalent for users based in the United States.
 * @export
 * @interface UsersSubmitComplianceInfoRequestW9
 */
export interface UsersSubmitComplianceInfoRequestW9 {
    /**
     * Type of entity filling out the W-9, `business` or `individual`.
     * @type {string}
     * @memberof UsersSubmitComplianceInfoRequestW9
     */
    'entity_type': UsersSubmitComplianceInfoRequestW9EntityTypeEnum;
    /**
     * Legal bussiness name. Required if `entity_type` is `business`.
     * @type {string}
     * @memberof UsersSubmitComplianceInfoRequestW9
     */
    'business_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersSubmitComplianceInfoRequestW9
     */
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersSubmitComplianceInfoRequestW9
     */
    'last_name'?: string;
    /**
     * Required if `entity_type` is `individual`.
     * @type {string}
     * @memberof UsersSubmitComplianceInfoRequestW9
     */
    'date_of_birth': string;
    /**
     * SSN if `entity_type` is `individual`. EIN if `entity_type` is `business`.
     * @type {string}
     * @memberof UsersSubmitComplianceInfoRequestW9
     */
    'tin': string;
    /**
     * 
     * @type {UsersSubmitComplianceInfoRequestW9Address}
     * @memberof UsersSubmitComplianceInfoRequestW9
     */
    'address': UsersSubmitComplianceInfoRequestW9Address;
}

type UsersSubmitComplianceInfoRequestW9EntityTypeEnum = 'individual' | 'business'

