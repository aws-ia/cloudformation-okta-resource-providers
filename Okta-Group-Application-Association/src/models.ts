// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Okta::Group::GroupApplicationAssociation';

    @Exclude()
    protected readonly IDENTIFIER_KEY_APPLICATIONID: string = '/properties/ApplicationId';
    @Exclude()
    protected readonly IDENTIFIER_KEY_GROUPID: string = '/properties/GroupId';

    @Expose({ name: 'ApplicationId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'applicationId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    applicationId?: Optional<string>;
    @Expose({ name: 'GroupId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'groupId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    groupId?: Optional<string>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.applicationId != null) {
            identifier[this.IDENTIFIER_KEY_APPLICATIONID] = this.applicationId;
        }

        if (this.groupId != null) {
            identifier[this.IDENTIFIER_KEY_GROUPID] = this.groupId;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 2 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
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

