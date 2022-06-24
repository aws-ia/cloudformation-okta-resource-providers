import {AbstractOktaResource} from "../../Okta-Common/src/abstract-okta-resource";
import {Application, ResourceModel} from './models';
import {OktaClient} from "../../Okta-Common/src/okta-client";

interface CallbackContext extends Record<string, any> {}

type Applications = Application[];

class Resource extends AbstractOktaResource<ResourceModel, Application, Application, Application> {
    async get(model: ResourceModel): Promise<ResourceModel> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Application>(
            'get',
            `/api/v1/apps/${model.id}`);
        return new ResourceModel(response.data);
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Applications>(
            'get',
            `/api/v1/apps`);

        return response.data.map(app => this.setModelFrom(new ResourceModel(), new Application(app)));
    }

    async create(model: ResourceModel): Promise<Application> {
        let response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<ResourceModel>(
            'post',
            `/api/v1/apps`,
            {},
            model.toJSON(),
            this.loggerProxy);

        let appResponse: Application = new Application(response.data);

        appResponse.oktaAccess = model.oktaAccess;
        return appResponse;
    }

    async update(model: ResourceModel): Promise<ResourceModel> {
        let response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Application>(
            'put',
            `/api/v1/apps/${model.id}`,
            {},
            model.toJSON(),
            this.loggerProxy);
        return new ResourceModel(response.data);
    }

    async deactivate(model: ResourceModel): Promise<ResourceModel> {
        let response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Application>(
            'post',
            `/api/v1/apps/${model.id}/lifecycle/deactivate`,
            {},
            {},
            this.loggerProxy);
        return new ResourceModel(response.data);
    }

    async delete(model: ResourceModel): Promise<void> {
        await this.deactivate(model);
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Application>(
            'delete',
            `/api/v1/apps/${model.id}`);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: Application | undefined): ResourceModel {
        if (!from) {
            return model;
        }
        model.application = from;
        if (from.id) {
            model.id = from.id;
        }
        return model;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
