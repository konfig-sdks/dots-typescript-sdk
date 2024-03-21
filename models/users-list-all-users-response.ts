/*
dots api

Scalable and Flexible Payouts Infrastructure

The version of the OpenAPI document: 1.0
Contact: info@dots.dev

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { User } from './user';

/**
 * 
 * @export
 * @interface UsersListAllUsersResponse
 */
export interface UsersListAllUsersResponse {
    /**
     * Array of `user` objects.
     * @type {Array<User>}
     * @memberof UsersListAllUsersResponse
     */
    'data'?: Array<User>;
    /**
     * `true` if there are more objects.
     * @type {boolean}
     * @memberof UsersListAllUsersResponse
     */
    'has_more'?: boolean;
}

