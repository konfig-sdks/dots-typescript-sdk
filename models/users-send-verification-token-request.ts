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
 * @interface UsersSendVerificationTokenRequest
 */
export interface UsersSendVerificationTokenRequest {
    /**
     * Defaults to `false` which sends token via SMS. Set `true` to receive via call instead.
     * @type {boolean}
     * @memberof UsersSendVerificationTokenRequest
     */
    'use_voice'?: boolean;
}

