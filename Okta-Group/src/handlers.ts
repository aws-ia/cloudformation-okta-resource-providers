import {AbstractOktaResource} from "okta-common/src/abstract-okta-resource";
import {Group, ResourceModel} from './models';
import {OktaClient} from "okta-common/src/okta-client";

interface CallbackContext extends Record<string, any> {}

class Resource extends AbstractOktaResource<ResourceModel, Group, Group, Group> {
    async get(model: ResourceModel): Promise<ResourceModel> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Group>(
            'get',
            `/api/v1/groups/${model.id}`);
        return new ResourceModel(response.data);
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Group>(
            'get',
            `/api/v1/groups`);

        return null;
        // return response.data.dashboards.map(dashboard => this.setModelFrom(new ResourceModel(), new Dashboard(dashboard)));
    }

    async create(model: ResourceModel): Promise<ResourceModel> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Group>(
            'post',
            `/api/v1/groups`,
            {},
            model.toJSON());
        return new ResourceModel(response.data);
    }

    async update(model: ResourceModel): Promise<ResourceModel> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Group>(
            'put',
            `/api/v1/groups/${model.id}`);
        return new ResourceModel(response.data);
    }

    async delete(model: ResourceModel): Promise<void> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Group>(
            'delete',
            `/api/v1/groups/${model.id}`);
        // return new ResourceModel(response.data);
    }

    newModel(partial: any): ResourceModel {
        return undefined;
    }

    setModelFrom(model: ResourceModel, from: ResourceModel | undefined): ResourceModel {
        return undefined;
    }


}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
