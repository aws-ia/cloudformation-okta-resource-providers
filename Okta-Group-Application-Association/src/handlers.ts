import {AbstractOktaResource} from "../../Okta-Common/src/abstract-okta-resource";
import {GroupApplicationAssociation, ResourceModel} from './models';
import {OktaClient} from "../../Okta-Common/src/okta-client";

interface CallbackContext extends Record<string, any> {}

class Resource extends AbstractOktaResource<ResourceModel, GroupApplicationAssociation, GroupApplicationAssociation, GroupApplicationAssociation> {
    async get(model: ResourceModel): Promise<ResourceModel> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<GroupApplicationAssociation>(
            'get',
            `/api/v1/apps/${model.id}`);
        return new ResourceModel(response.data);
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<GroupApplicationAssociation>(
            'get',
            `/api/v1/apps`);

        return null;
        // return response.data.dashboards.map(dashboard => this.setModelFrom(new ResourceModel(), new Dashboard(dashboard)));
    }

    async create(model: ResourceModel): Promise<ResourceModel> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<ResourceModel>(
            'post',
            `/api/v1/apps`,
            {},
            model.toJSON());
        return new ResourceModel(response.data);
    }

    async update(model: ResourceModel): Promise<ResourceModel> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<GroupApplicationAssociation>(
            'put',
            `/api/v1/apps/${model.id}`);
        return new ResourceModel(response.data);
    }

    async delete(model: ResourceModel): Promise<void> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<GroupApplicationAssociation>(
            'delete',
            `/api/v1/apps/${model.id}`);
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
