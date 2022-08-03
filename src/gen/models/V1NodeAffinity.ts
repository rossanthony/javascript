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

import { V1NodeSelector } from '../models/V1NodeSelector';
import { V1PreferredSchedulingTerm } from '../models/V1PreferredSchedulingTerm';
import { HttpFile } from '../http/http';

/**
* Node affinity is a group of node affinity scheduling rules.
*/
export class V1NodeAffinity {
    /**
    * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
    */
    'preferredDuringSchedulingIgnoredDuringExecution'?: Array<V1PreferredSchedulingTerm>;
    'requiredDuringSchedulingIgnoredDuringExecution'?: V1NodeSelector;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "preferredDuringSchedulingIgnoredDuringExecution",
            "baseName": "preferredDuringSchedulingIgnoredDuringExecution",
            "type": "Array<V1PreferredSchedulingTerm>",
            "format": ""
        },
        {
            "name": "requiredDuringSchedulingIgnoredDuringExecution",
            "baseName": "requiredDuringSchedulingIgnoredDuringExecution",
            "type": "V1NodeSelector",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1NodeAffinity.attributeTypeMap;
    }

    public constructor() {
    }
}

