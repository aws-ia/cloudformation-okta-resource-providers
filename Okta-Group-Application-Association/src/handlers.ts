import {AbstractOktaResource} from "../../Okta-Common/src/abstract-okta-resource";
import {ResourceModel, TypeConfigurationModel} from './models';
import {OktaClient} from "../../Okta-Common/src/okta-client";

import {version} from '../package.json';
import {
    InvalidRequest,
    NotUpdatable
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";

interface CallbackContext extends Record<string, any> {}

class Resource extends AbstractOktaResource<ResourceModel, ResourceModel, ResourceModel, ResourceModel, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;


    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel>(
            'get',
            `/api/v1/apps/${model.applicationId}/groups/${model.groupId}`);

        return new ResourceModel(response.data);
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        throw new InvalidRequest("Resource cannot be listed")
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel>(
            'put',
            `/api/v1/apps/${model.applicationId}/groups/${model.groupId}`,
            {});
        return new ResourceModel(response.data);
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        throw new NotUpdatable();
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel>(
            'delete',
            `/api/v1/apps/${model.applicationId}/groups/${model.groupId}`);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: ResourceModel): ResourceModel {
        if (!from) {
            return model;
        }
        if (from.applicationId) {
            model.applicationId = from.applicationId;
        }
        if (from.groupId) {
            model.groupId = from.groupId;
        }
        return model;
    }


}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
