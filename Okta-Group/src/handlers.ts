import {AbstractOktaResource} from "../../Okta-Common/src/abstract-okta-resource";
import {Group, ResourceModel} from './models';
import {OktaClient} from "../../Okta-Common/src/okta-client";

interface CallbackContext extends Record<string, any> {}

type Groups = Group[];

class Resource extends AbstractOktaResource<ResourceModel, Group, Group, Group> {
    async get(model: ResourceModel): Promise<ResourceModel> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Group>(
            'get',
            `/api/v1/groups/${model.id}`);
        return new ResourceModel(response.data);
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Groups>(
            'get',
            `/api/v1/groups`);

        return response.data.map(group => this.setModelFrom(new ResourceModel(), new Group(group)));
    }

    async create(model: ResourceModel): Promise<ResourceModel> {
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Group>(
            'post',
            `/api/v1/groups`,
            {},
            model.toJSON(),
            this.loggerProxy);
        return new ResourceModel(response.data);
    }

    async update(model: ResourceModel): Promise<ResourceModel> {
        let modelForDelete: ResourceModel = new ResourceModel({
            profile: model.profile
        });
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Group>(
            'put',
            `/api/v1/groups/${model.id}`,
            {},
            modelForDelete.toJSON(),
            this.loggerProxy);
        return new ResourceModel(response.data);
    }

    async delete(model: ResourceModel): Promise<void> {
        await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Group>(
            'delete',
            `/api/v1/groups/${model.id}`);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: Group | undefined): ResourceModel {
        if (!from) {
            return model;
        }
        model.group = from;
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
