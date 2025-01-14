/*
dots api

Scalable and Flexible Payouts Infrastructure

The version of the OpenAPI document: 1.0
Contact: info@dots.dev

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UsersSubmitComplianceInfoRequestW8ben } from './users-submit-compliance-info-request-w8ben';
import { UsersSubmitComplianceInfoRequestW9 } from './users-submit-compliance-info-request-w9';

/**
 * 
 * @export
 * @interface UsersSubmitComplianceInfoRequest
 */
export interface UsersSubmitComplianceInfoRequest {
    /**
     * 
     * @type {UsersSubmitComplianceInfoRequestW9}
     * @memberof UsersSubmitComplianceInfoRequest
     */
    'w9'?: UsersSubmitComplianceInfoRequestW9;
    /**
     * 
     * @type {UsersSubmitComplianceInfoRequestW8ben}
     * @memberof UsersSubmitComplianceInfoRequest
     */
    'w8ben'?: UsersSubmitComplianceInfoRequestW8ben;
}

