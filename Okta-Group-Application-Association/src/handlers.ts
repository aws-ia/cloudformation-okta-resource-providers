import {AbstractOktaResource} from "../../Okta-Common/src/abstract-okta-resource";
import {GroupApplicationAssociation, ResourceModel} from './models';
import {OktaClient} from "../../Okta-Common/src/okta-client";

interface CallbackContext extends Record<string, any> {}

type GroupApplicationAssociations = {
    id: string
}[]

class Resource extends AbstractOktaResource<ResourceModel, GroupApplicationAssociation, GroupApplicationAssociation, GroupApplicationAssociation> {
    async get(model: ResourceModel): Promise<ResourceModel> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<GroupApplicationAssociation>(
            'get',
            `/api/v1/apps/${model.applicationId}/groups/${model.groupId}`);
        return new ResourceModel(response.data);
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<GroupApplicationAssociations>(
            'get',
            `/api/v1/apps/${model.applicationId}/groups`);
        return response.data.map(assn => new ResourceModel(<ResourceModel>{
            applicationId: model.applicationId,
            groupId: assn.id
        }));
    }

    async create(model: ResourceModel): Promise<ResourceModel> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<ResourceModel>(
            'put',
            `/api/v1/apps/${model.applicationId}/groups/${model.groupId}`,
            {});
        return new ResourceModel(response.data);
    }

    async update(model: ResourceModel): Promise<ResourceModel> {
        // Nothing is updatable
        return model;
    }

    async delete(model: ResourceModel): Promise<void> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<GroupApplicationAssociation>(
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

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
