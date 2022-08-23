import {AbstractOktaResource} from "../../Okta-Common/src/abstract-okta-resource";
import {Application, ResourceModel, TypeConfigurationModel} from './models';
import {OktaClient} from "../../Okta-Common/src/okta-client";

import {version} from '../package.json';

interface CallbackContext extends Record<string, any> {}

type Applications = Application[];

class Resource extends AbstractOktaResource<ResourceModel, Application, Application, Application, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<Application>(
            'get',
            `/api/v1/apps/${model.id}`);
        return new ResourceModel(response.data);
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<Applications>(
            'get',
            `/api/v1/apps`);

        return response.data.map(app => this.setModelFrom(new ResourceModel(), new Application(app)));
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<Application> {
        let response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel>(
            'post',
            `/api/v1/apps`,
            {},
            model.toJSON(),
            this.loggerProxy);

        return new Application(response.data);
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<Application>(
            'put',
            `/api/v1/apps/${model.id}`,
            {},
            model.toJSON(),
            this.loggerProxy);
        return new ResourceModel(response.data);
    }

    async deactivate(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<Application>(
            'post',
            `/api/v1/apps/${model.id}/lifecycle/deactivate`,
            {},
            {},
            this.loggerProxy);
        return new ResourceModel(response.data);
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        await this.deactivate(model, typeConfiguration);
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<Application>(
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

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
