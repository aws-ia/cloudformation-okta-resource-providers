import {ApiErrorResponse} from "./okta-client";
import {
    BaseModel,
    exceptions,
    ResourceHandlerRequest
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AxiosError} from "axios";
import {AbstractBasedResource} from "./abstract-base-resource";

export abstract class AbstractOktaResource<ResourceModelType extends BaseModel, GetResponseData, CreateResponseData, UpdateResponseData, TypeConfigurationModel> extends AbstractBasedResource<ResourceModelType, GetResponseData, CreateResponseData, UpdateResponseData, AxiosError<ApiErrorResponse>, TypeConfigurationModel> {

    processRequestException(e: AxiosError<ApiErrorResponse>, request: ResourceHandlerRequest<ResourceModelType>) {
        const apiErrorResponse = e.response?.data;
        let errorMessage = apiErrorResponse?.message;

        const status = e.status
            ? parseInt(e.status)
            : e.response
                ? e.response.status
                : null;

        let errorCauses = (<any> e.response?.data)?.errorCauses
        if (Array.isArray(errorCauses) && errorCauses.length > 0) {
            errorCauses.forEach(function(item) {
                if ((<string>item.errorSummary).indexOf("An object with this field already exists in the current organization") > 0) {
                    throw new exceptions.AlreadyExists(this.typeName, "id")
                }
            })
        }

        switch (status) {
            case 400:
                throw new exceptions.InvalidRequest(errorMessage);
            case 401:
                throw new exceptions.AccessDenied(`Access denied, please check your API token: ${errorMessage}`);
            case 404:
                throw new exceptions.NotFound(this.typeName, "id");
            case 429:
                throw new exceptions.ServiceLimitExceeded(errorMessage);
            default:
                throw new exceptions.InternalFailure(`  Unexpected error occurred while talking to the Okta API (HTTP status ${status}) => ${errorMessage}`);
        }
    }
}