/*
 * Harbor API
 *
 * These APIs provide services for manipulating Harbor project.
 *
 * API version: 2.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package client

type HarborRegistry struct {
	// The registry ID.
	Id int64 `json:"id,omitempty"`
	// The registry URL string.
	Url string `json:"url,omitempty"`
	// The registry name.
	Name string `json:"name,omitempty"`
	Credential *HarborRegistryCredential `json:"credential,omitempty"`
	// Type of the registry, e.g. 'harbor'.
	Type_ string `json:"type,omitempty"`
	// Whether or not the certificate will be verified when Harbor tries to access the server.
	Insecure bool `json:"insecure,omitempty"`
	// Description of the registry.
	Description string `json:"description,omitempty"`
	// Health status of the registry.
	Status string `json:"status,omitempty"`
	// The create time of the policy.
	CreationTime string `json:"creation_time,omitempty"`
	// The update time of the policy.
	UpdateTime string `json:"update_time,omitempty"`
}
