import {AbstractOktaResource} from "../../Okta-Common/src/abstract-okta-resource";
import {GroupMembership, ResourceModel} from './models';
import {OktaClient} from "../../Okta-Common/src/okta-client";
import {AxiosError, AxiosResponse} from "axios";

interface CallbackContext extends Record<string, any> {}

type User = {
    id: string
}

type Users = User[]

type GroupMemberships = GroupMembership[]

class Resource extends AbstractOktaResource<ResourceModel, GroupMembership, GroupMembership, GroupMembership> {
    async get(model: ResourceModel): Promise<ResourceModel> {
        let userGuid = await this.getUserGuid(model);
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<Users>(
            'get',
            `/api/v1/groups/${model.groupId}/users`);
        let found = response.data.find(u => {
            return u.id == userGuid;
        })
        if (!found) {
            // Simulate Axios 404 to use existing exception processing
            const response: AxiosResponse = {
                data: {message: "Membership Not Found"},
                status: 404,
            } as AxiosResponse;
            const axiosError = {
                config: {},
                request: {},
                response: response} as AxiosError<any>;
            throw axiosError;
        }
        return model;
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        try {
            return [await this.get(model)];
        } catch (e) {
            return [];
        }
    }

    async getUserGuid(model: ResourceModel): Promise<string> {
        if (model.userIdentifier.guid) {
            return model.userIdentifier.guid;
        }
        let response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<User>(
            'get',
            `/api/v1/users/${model.userIdentifier.login}`,
            {},
            {},
            this.loggerProxy);
        return response.data.id;
    }

    async create(model: ResourceModel): Promise<ResourceModel> {
        let userGuid = await this.getUserGuid(model);
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<ResourceModel>(
            'put',
            `/api/v1/groups/${model.groupId}/users/${userGuid}`);
        return new ResourceModel(model);
    }

    async update(model: ResourceModel): Promise<ResourceModel> {
        // Nothing is updatable
        return model;
    }

    async delete(model: ResourceModel): Promise<void> {
        let userGuid = await this.getUserGuid(model);
        const response = await new OktaClient(model.oktaAccess.url, model.oktaAccess.apiKey).doRequest<GroupMembership>(
            'delete',
            `/api/v1/groups/${model.groupId}/users/${userGuid}`);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: GroupMembership | undefined): ResourceModel {
        if (!from) {
            return model;
        }
        if (from.groupId) {
            model.groupId = from.groupId;
            model.userIdentifier = from.userIdentifier;
        }
        return model;
    }


}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
