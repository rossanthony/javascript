/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1Condition } from '../models/V1Condition';
import { V1LoadBalancerStatus } from '../models/V1LoadBalancerStatus';
import { HttpFile } from '../http/http';

/**
* ServiceStatus represents the current status of a service.
*/
export class V1ServiceStatus {
    /**
    * Current service state
    */
    'conditions'?: Array<V1Condition>;
    'loadBalancer'?: V1LoadBalancerStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1Condition>",
            "format": ""
        },
        {
            "name": "loadBalancer",
            "baseName": "loadBalancer",
            "type": "V1LoadBalancerStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ServiceStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

