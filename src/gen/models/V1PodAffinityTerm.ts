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
* Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
*/
export class V1PodAffinityTerm {
    'labelSelector'?: V1LabelSelector;
    'namespaceSelector'?: V1LabelSelector;
    /**
    * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means \"this pod's namespace\"
    */
    'namespaces'?: Array<string>;
    /**
    * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
    */
    'topologyKey': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "labelSelector",
            "baseName": "labelSelector",
            "type": "V1LabelSelector",
            "format": ""
        },
        {
            "name": "namespaceSelector",
            "baseName": "namespaceSelector",
            "type": "V1LabelSelector",
            "format": ""
        },
        {
            "name": "namespaces",
            "baseName": "namespaces",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "topologyKey",
            "baseName": "topologyKey",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PodAffinityTerm.attributeTypeMap;
    }

    public constructor() {
    }
}

