import {AbstractOktaResource} from "okta-common/src/abstract-okta-resource";
import { ResourceModel } from './models';
import {OktaClient} from "okta-common/src/okta-client";

interface CallbackContext extends Record<string, any> {}

class Resource extends AbstractOktaResource<ResourceModel, ResourceModel, ResourceModel, ResourceModel> {
    async get(model: ResourceModel): Promise<ResourceModel> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<ResourceModel>(
            'get',
            `/api/v1/apps/${model.id}`);
        return new ResourceModel(response.data);
    }

    async create(model: ResourceModel): Promise<ResourceModel> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<ResourceModel>(
            'post',
            `/api/v1/apps`,
            {},
            model.toJSON());
        return new ResourceModel(response.data);
    }

    delete(model: ResourceModel): Promise<void> {
        return Promise.resolve(undefined);
    }

    list(model: ResourceModel): Promise<ResourceModel[]> {
        return Promise.resolve([]);
    }

    newModel(partial: any): ResourceModel {
        return undefined;
    }

    setModelFrom(model: ResourceModel, from: ResourceModel | undefined): ResourceModel {
        return undefined;
    }

    update(model: ResourceModel): Promise<ResourceModel> {
        return Promise.resolve(undefined);
    }


}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
