import {AbstractOktaResource} from "../../Okta-Common/src/abstract-okta-resource";
import {Policy, ResourceModel, TypeConfigurationModel} from './models';
import {OktaClient} from "../../Okta-Common/src/okta-client";

import {version} from '../package.json';

interface CallbackContext extends Record<string, any> {}

type Policies = Policy[];

class Resource extends AbstractOktaResource<ResourceModel, Policy, Policy, Policy, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<Policy>(
            'get',
            `/api/v1/policies/${model.id}`);
        return new ResourceModel(response.data);
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        delete model.settings
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<Policies>(
            'get',
            `/api/v1/policies`,
            {
                "type": model.type_
            });

        return response.data.map(app => this.setModelFrom(new ResourceModel(), new Policy(app)));
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<Policy> {
        delete model.policy
        let response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel>(
            'post',
            `/api/v1/policies`,
            {},
            model.toJSON(),
            this.loggerProxy);

        return new Policy(response.data);
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let modelToUpdate = new ResourceModel(model);
        delete modelToUpdate.id
        delete modelToUpdate.policy
        let response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<Policy>(
            'put',
            `/api/v1/policies/${model.id}`,
            {},
            modelToUpdate.toJSON(),
            this.loggerProxy);

        return new ResourceModel(response.data);
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<Policy>(
            'delete',
            `/api/v1/policies/${model.id}`);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: Policy | undefined): ResourceModel {
        if (!from) {
            return model;
        }
        model.policy = from;
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
