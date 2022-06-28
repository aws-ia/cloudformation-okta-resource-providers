import {AbstractOktaResource} from "../../Okta-Common/src/abstract-okta-resource";
import {Policy, ResourceModel} from './models';
import {OktaClient} from "../../Okta-Common/src/okta-client";

interface CallbackContext extends Record<string, any> {}

type Policies = Policy[];

class Resource extends AbstractOktaResource<ResourceModel, Policy, Policy, Policy> {
    async get(model: ResourceModel): Promise<ResourceModel> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Policy>(
            'get',
            `/api/v1/policies/${model.id}`);
        return new ResourceModel(response.data);
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        delete model.settings
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Policies>(
            'get',
            `/api/v1/policies`,
            {
                "type": model.type_
            });

        return response.data.map(app => this.setModelFrom(new ResourceModel(), new Policy(app)));
    }

    async create(model: ResourceModel): Promise<Policy> {
        delete model.policy
        var response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<ResourceModel>(
            'post',
            `/api/v1/policies`,
            {},
            model.toJSON(),
            this.loggerProxy);

        let policyResponse: Policy = new Policy(response.data);
        policyResponse.oktaAccess = model.oktaAccess;
        return policyResponse;
    }

    async update(model: ResourceModel): Promise<ResourceModel> {
        let modelToUpdate = new ResourceModel(model);
        delete modelToUpdate.id
        delete modelToUpdate.policy
        var response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Policy>(
            'put',
            `/api/v1/policies/${model.id}`,
            {},
            modelToUpdate.toJSON(),
            this.loggerProxy);

        return new ResourceModel(response.data);
    }

    async delete(model: ResourceModel): Promise<void> {
        await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Policy>(
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

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
