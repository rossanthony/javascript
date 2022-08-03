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

import { IntOrString } from '../../types';
import { V1LabelSelector } from '../models/V1LabelSelector';
import { HttpFile } from '../http/http';

/**
* PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
*/
export class V1PodDisruptionBudgetSpec {
    /**
    * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
    */
    'maxUnavailable'?: IntOrString;
    /**
    * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
    */
    'minAvailable'?: IntOrString;
    'selector'?: V1LabelSelector;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "maxUnavailable",
            "baseName": "maxUnavailable",
            "type": "IntOrString",
            "format": "int-or-string"
        },
        {
            "name": "minAvailable",
            "baseName": "minAvailable",
            "type": "IntOrString",
            "format": "int-or-string"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "V1LabelSelector",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PodDisruptionBudgetSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

