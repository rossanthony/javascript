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

import { V1SecretReference } from '../models/V1SecretReference';
import { HttpFile } from '../http/http';

/**
* Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
*/
export class V1CinderPersistentVolumeSource {
    /**
    * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
    */
    'fsType'?: string;
    /**
    * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
    */
    'readOnly'?: boolean;
    'secretRef'?: V1SecretReference;
    /**
    * volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
    */
    'volumeID': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1SecretReference",
            "format": ""
        },
        {
            "name": "volumeID",
            "baseName": "volumeID",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1CinderPersistentVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

