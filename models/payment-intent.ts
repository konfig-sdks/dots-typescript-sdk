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
 * @interface PaymentIntent
 */
export interface PaymentIntent {
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    'id': string;
    /**
     * Amount in cents
     * @type {number}
     * @memberof PaymentIntent
     */
    'amount': number;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    'currency': PaymentIntentCurrencyEnum;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    'user_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    'status'?: PaymentIntentStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    'transfer_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    'payment_method_id'?: string;
    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     * @type {any}
     * @memberof PaymentIntent
     */
    'metadata'?: any;
    /**
     * Only availble on payment intent creation.
     * @type {string}
     * @memberof PaymentIntent
     */
    'client_secret'?: string;
}

type PaymentIntentCurrencyEnum = 'usd'
type PaymentIntentStatusEnum = 'initialized' | 'created' | 'requires_payment_method' | 'requires_confirmation' | 'requires_action' | 'processing' | 'succeeded' | 'requires_capture' | 'canceled' | 'failed'

