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

import { V1LabelSelector } from '../models/V1LabelSelector';
import { HttpFile } from '../http/http';

/**
* AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
*/
export class V1alpha1AggregationRule {
    /**
    * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
    */
    'clusterRoleSelectors'?: Array<V1LabelSelector>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clusterRoleSelectors",
            "baseName": "clusterRoleSelectors",
            "type": "Array<V1LabelSelector>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1AggregationRule.attributeTypeMap;
    }

    public constructor() {
    }
}

