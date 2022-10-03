import {AbstractOktaResource} from "../../Okta-Common/src/abstract-okta-resource";
import {GroupApplicationAssociation, ResourceModel, TypeConfigurationModel} from './models';
import {OktaClient} from "../../Okta-Common/src/okta-client";

import {version} from '../package.json';

interface CallbackContext extends Record<string, any> {}

type GroupApplicationAssociations = {
    id: string
}[]

class Resource extends AbstractOktaResource<ResourceModel, GroupApplicationAssociation, GroupApplicationAssociation, GroupApplicationAssociation, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<GroupApplicationAssociation>(
            'get',
            `/api/v1/apps/${model.applicationId}/groups/${model.groupId}`);
        return new ResourceModel(response.data);
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<GroupApplicationAssociations>(
            'get',
            `/api/v1/apps/${model.applicationId}/groups`);
        return response.data.map(assn => new ResourceModel(<ResourceModel>{
            applicationId: model.applicationId,
            groupId: assn.id
        }));
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel>(
            'put',
            `/api/v1/apps/${model.applicationId}/groups/${model.groupId}`,
            {});
        return new ResourceModel(response.data);
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        // Nothing is updatable
        return model;
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<GroupApplicationAssociation>(
            'delete',
            `/api/v1/apps/${model.applicationId}/groups/${model.groupId}`);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: GroupApplicationAssociation): ResourceModel {
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
