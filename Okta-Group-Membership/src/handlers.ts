import {AbstractOktaResource} from "../../Okta-Common/src/abstract-okta-resource";
import {ResourceModel, TypeConfigurationModel} from './models';
import {OktaClient} from "../../Okta-Common/src/okta-client";
import {AxiosError, AxiosResponse} from "axios";

import {version} from '../package.json';
import {type} from "os";

interface CallbackContext extends Record<string, any> {}

type User = {
    id: string,
    profile: {
        login: string
    }
}

type Users = User[]

type GroupMembership = {
    groupId?: string;
    userId?: string;
}

type GroupMemberships = GroupMembership[]

class Resource extends AbstractOktaResource<ResourceModel, GroupMembership, GroupMembership, GroupMembership, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        // let userGuid = await this.getUserGuid(model, typeConfiguration);
        let userGuid = model.userId;
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<Users>(
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

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        try {
            return [await this.get(model, typeConfiguration)];
        } catch (e) {
            return [];
        }
    }

//    async getUserGuid(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<string> {
//        if (model.user.userId) {
//            return model.user.userId;
//        }
//        let response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<User>(
//            'get',
//            `/api/v1/users/${model.user.userLogin}`,
//            {},
//            {},
//            this.loggerProxy);
//        return response.data.id;
//    }
//
//    async getUserLogin(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<string> {
//        if (model.user.userLogin) {
//            return model.user.userLogin;
//        }
//        let response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<User>(
//            'get',
//            `/api/v1/users/${model.user.userId}`,
//            {},
//            {},
//            this.loggerProxy);
//        return response.data.profile.login;
//    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        // let userGuid = await this.getUserGuid(model, typeConfiguration);
        let userGuid = model.userId;
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel>(
            'put',
            `/api/v1/groups/${model.groupId}/users/${userGuid}`);
        return new ResourceModel(model);
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        // Nothing is updatable
        return model;
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        // let userGuid = await this.getUserGuid(model, typeConfiguration);
        let userGuid = model.userId;
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<GroupMembership>(
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
            model.userId = from.userId;
        }
        return model;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
