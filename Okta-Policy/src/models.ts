// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Okta::Policy::Policy';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';

    @Expose({ name: 'OktaAccess' })
    @Type(() => OktaAccess)
    oktaAccess?: Optional<OktaAccess>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'Priority' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'priority', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    priority?: Optional<integer>;
    @Expose({ name: 'Conditions' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'conditions', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    conditions?: Optional<Map<string, object>>;
    @Expose({ name: 'Settings' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'settings', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    settings?: Optional<Map<string, object>>;
    @Expose({ name: 'Policy' })
    @Type(() => Policy)
    policy?: Optional<Policy>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.id != null) {
            identifier[this.IDENTIFIER_KEY_ID] = this.id;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 1 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

export class OktaAccess extends BaseModel {
    ['constructor']: typeof OktaAccess;


    @Expose({ name: 'Url' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'url', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    url?: Optional<string>;
    @Expose({ name: 'ApiKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'apiKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    apiKey?: Optional<string>;

}

export class Policy extends BaseModel {
    ['constructor']: typeof Policy;


    @Expose({ name: 'OktaAccess' })
    @Type(() => OktaAccess)
    oktaAccess?: Optional<OktaAccess>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'System' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'system', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    system?: Optional<boolean>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'Priority' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'priority', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    priority?: Optional<integer>;
    @Expose({ name: 'Status' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'status', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    status?: Optional<string>;
    @Expose({ name: 'Conditions' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'conditions', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    conditions?: Optional<Map<string, object>>;
    @Expose({ name: 'Settings' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'settings', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    settings?: Optional<Map<string, object>>;
    @Expose({ name: 'Created' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'created', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    created?: Optional<string>;
    @Expose({ name: 'LastUpdated' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'lastUpdated', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    lastUpdated?: Optional<string>;
    @Expose({ name: 'Links' })
    @Type(() => Links)
    links?: Optional<Links>;

}

export class Links extends BaseModel {
    ['constructor']: typeof Links;


    @Expose({ name: 'Self' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'self', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    self?: Optional<string>;
    @Expose({ name: 'Activate' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'activate', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    activate?: Optional<string>;
    @Expose({ name: 'Deactivate' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'deactivate', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    deactivate?: Optional<string>;
    @Expose({ name: 'Rules' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'rules', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    rules?: Optional<string>;

}

