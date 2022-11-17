import {AbstractOktaResource} from "../../Okta-Common/src/abstract-okta-resource";
import {ResourceModel, TypeConfigurationModel} from './models';
import {OktaClient} from "../../Okta-Common/src/okta-client";
import {CaseTransformer, Transformer} from "../../Okta-Common/src/util";

import {version} from '../package.json';

interface CallbackContext extends Record<string, any> {}

const PolicyTypes = [
    "OKTA_SIGN_ON",
    "PASSWORD",
    "MFA_ENROLL",
    "IDP_DISCOVERY"
]

class Resource extends AbstractOktaResource<ResourceModel, ResourceModel, ResourceModel, ResourceModel, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel>(
            'get',
            `/api/v1/policies/${model.id}`);
        return new ResourceModel(response.data);
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        let results = <ResourceModel[]>[];
        for (const type of PolicyTypes) {
            results = results.concat(await this.listType(model, typeConfiguration, type));
        }
        return results;
    }

    async listType(model: ResourceModel, typeConfiguration: TypeConfigurationModel, type: string): Promise<ResourceModel[]> {
        const response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel[]>(
            'get',
            `/api/v1/policies`,
            {
                "type": type
            });

        return response.data.map(app => this.setModelFrom(new ResourceModel(), new ResourceModel(app)));
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel>(
            'post',
            `/api/v1/policies`,
            {},
            model.toJSON(),
            this.loggerProxy);

        return new ResourceModel(response.data);
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let modelToUpdate = new ResourceModel(model);
        delete modelToUpdate.id
        let response = await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel>(
            'put',
            `/api/v1/policies/${model.id}`,
            {},
            modelToUpdate.toJSON(),
            this.loggerProxy);

        return new ResourceModel(response.data);
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        this.loggerProxy?.log("Deleting: ");
        this.loggerProxy?.log(`/api/v1/policies/${model.id}`);
        await new OktaClient(typeConfiguration.oktaAccess.url, typeConfiguration.oktaAccess.apiKey, this.userAgent).doRequest<ResourceModel>(
            'delete',
            `/api/v1/policies/${model.id}`);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: ResourceModel | undefined): ResourceModel {
        if (!from) {
            return model;
        }
        let result = new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform(),
            // Special case for schema-free object
            conditions: Transformer.for(from.conditions)
                .transformKeys(CaseTransformer.CAMEL_TO_PASCAL)
                .forModelIngestion()
                .transform(),
            // Special case as the framework maps `type` to `type_`
            type_: (<any>from).type
        });
        // Delete a couple of unused fields that are returned by the API
        // as they are subject to change server-side
        delete (<any>result)?.lastUpdated;
        delete (<any>result)?.created
        delete (<any>result)?.system;
        delete (<any>result)?.status;
        delete (<any>result)?._links;
        delete (<any>result)?.iDENTIFIER_KEY_ID;

        return result;
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
