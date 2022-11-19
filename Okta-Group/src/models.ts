// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Okta::Group::Group';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';

    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Profile' })
    @Type(() => Profile)
    profile?: Optional<Profile>;

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

export class Profile extends BaseModel {
    ['constructor']: typeof Profile;


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

}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;


    @Expose({ name: 'OktaAccess' })
    @Type(() => OktaAccess)
    oktaAccess?: Optional<OktaAccess>;

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

