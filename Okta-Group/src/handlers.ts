import {AbstractOktaResource} from "../../Okta-Common/src/abstract-okta-resource";
import {ResourceModel, TypeConfigurationModel} from './models';
import {OktaClient} from "../../Okta-Common/src/okta-client";

import {version} from '../package.json';

interface CallbackContext extends Record<string, any> {}

class Resource extends AbstractOktaResource<ResourceModel, ResourceModel, ResourceModel, ResourceModel, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel>(
            'get',
            `/api/v1/groups/${model.id}`);
        return new ResourceModel(response.data);
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel[]>(
            'get',
            `/api/v1/groups`);

        return response.data.map(group => this.setModelFrom(new ResourceModel(), new ResourceModel(group)));
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel>(
            'post',
            `/api/v1/groups`,
            {},
            model.toJSON(),
            this.loggerProxy);
        return new ResourceModel(response.data);
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let modelForDelete: ResourceModel = new ResourceModel({
            profile: model.profile
        });
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel>(
            'put',
            `/api/v1/groups/${model.id}`,
            {},
            modelForDelete.toJSON(),
            this.loggerProxy);
        return new ResourceModel(response.data);
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel>(
            'delete',
            `/api/v1/groups/${model.id}`);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: ResourceModel | undefined): ResourceModel {
        if (!from) {
            return model;
        }
        let result =  new ResourceModel({
            ...model,
            ...from
        });
        // Delete a couple of unused fields that are returned by the API
        // as they are subject to change server-side
        delete (<any>result)?.lastUpdated;
        delete (<any>result)?.created;
        delete (<any>result)?._links;
        delete (<any>result)?.lastMembershipUpdated;
        delete (<any>result)?.objectClass;
        delete (<any>result)?.type;
        return result;
    }


}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
