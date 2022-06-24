// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Okta::Application::Application';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';

    @Expose({ name: 'OktaAccess' })
    @Type(() => OktaAccess)
    oktaAccess?: Optional<OktaAccess>;
    @Expose({ name: 'Accessibility' })
    @Type(() => Accessibility)
    accessibility?: Optional<Accessibility>;
    @Expose({ name: 'Credentials' })
    @Type(() => ApplicationCredentials)
    credentials?: Optional<ApplicationCredentials>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Label' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'label', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    label?: Optional<string>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'RequestObjectSigningAlg' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'requestObjectSigningAlg', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    requestObjectSigningAlg?: Optional<string>;
    @Expose({ name: 'Settings' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'settings', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    settings?: Optional<Map<string, object>>;
    @Expose({ name: 'SignOnMode' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'signOnMode', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    signOnMode?: Optional<string>;
    @Expose({ name: 'Visibility' })
    @Type(() => Visibility)
    visibility?: Optional<Visibility>;
    @Expose({ name: 'Application' })
    @Type(() => Application)
    application?: Optional<Application>;

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

export class Accessibility extends BaseModel {
    ['constructor']: typeof Accessibility;


    @Expose({ name: 'ErrorRedirectUrl' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'errorRedirectUrl', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    errorRedirectUrl?: Optional<string>;
    @Expose({ name: 'LoginRedirectUrl' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'loginRedirectUrl', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    loginRedirectUrl?: Optional<string>;
    @Expose({ name: 'SelfService' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'selfService', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    selfService?: Optional<boolean>;

}

export class ApplicationCredentials extends BaseModel {
    ['constructor']: typeof ApplicationCredentials;


    @Expose({ name: 'OauthClient' })
    @Type(() => OauthCredential)
    oauthClient?: Optional<OauthCredential>;
    @Expose({ name: 'Password' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'password', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    password?: Optional<string>;
    @Expose({ name: 'Scheme' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'scheme', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    scheme?: Optional<string>;
    @Expose({ name: 'Signing' })
    @Type(() => SigningCredential)
    signing?: Optional<SigningCredential>;
    @Expose({ name: 'UserName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'userName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    userName?: Optional<string>;
    @Expose({ name: 'UserNameTemplate' })
    @Type(() => UserNameTemplate)
    userNameTemplate?: Optional<UserNameTemplate>;

}

export class OauthCredential extends BaseModel {
    ['constructor']: typeof OauthCredential;


    @Expose({ name: 'AutoKeyRotation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'autoKeyRotation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    autoKeyRotation?: Optional<boolean>;
    @Expose({ name: 'ClientId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'clientId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    clientId?: Optional<string>;
    @Expose({ name: 'ClientSecret' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'clientSecret', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    clientSecret?: Optional<string>;
    @Expose({ name: 'TokenEndpointAuthMethod' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'tokenEndpointAuthMethod', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    tokenEndpointAuthMethod?: Optional<string>;

}

export class SigningCredential extends BaseModel {
    ['constructor']: typeof SigningCredential;


    @Expose({ name: 'Kid' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'kid', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    kid?: Optional<string>;

}

export class UserNameTemplate extends BaseModel {
    ['constructor']: typeof UserNameTemplate;


    @Expose({ name: 'Template' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'template', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    template?: Optional<string>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;

}

export class Visibility extends BaseModel {
    ['constructor']: typeof Visibility;


    @Expose({ name: 'AutoLaunch' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'autoLaunch', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    autoLaunch?: Optional<boolean>;
    @Expose({ name: 'AutoSubmitToolbar' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'autoSubmitToolbar', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    autoSubmitToolbar?: Optional<boolean>;
    @Expose({ name: 'Hide' })
    @Type(() => Hide)
    hide?: Optional<Hide>;

}

export class Hide extends BaseModel {
    ['constructor']: typeof Hide;


    @Expose({ name: 'Ios' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'ios', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ios?: Optional<boolean>;
    @Expose({ name: 'Web' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'web', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    web?: Optional<boolean>;

}

export class Application extends BaseModel {
    ['constructor']: typeof Application;


    @Expose({ name: 'OktaAccess' })
    @Type(() => OktaAccess)
    oktaAccess?: Optional<OktaAccess>;
    @Expose({ name: 'Accessibility' })
    @Type(() => Accessibility)
    accessibility?: Optional<Accessibility>;
    @Expose({ name: 'Created' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'created', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    created?: Optional<string>;
    @Expose({ name: 'Credentials' })
    @Type(() => ApplicationCredentials)
    credentials?: Optional<ApplicationCredentials>;
    @Expose({ name: 'Features' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'features', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    features?: Optional<string>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Label' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'label', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    label?: Optional<string>;
    @Expose({ name: 'LastUpdated' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'lastUpdated', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    lastUpdated?: Optional<string>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'RequestObjectSigningAlg' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'requestObjectSigningAlg', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    requestObjectSigningAlg?: Optional<string>;
    @Expose({ name: 'Settings' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'settings', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    settings?: Optional<Map<string, object>>;
    @Expose({ name: 'SignOnMode' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'signOnMode', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    signOnMode?: Optional<string>;
    @Expose({ name: 'Status' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'status', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    status?: Optional<string>;
    @Expose({ name: 'Visibility' })
    @Type(() => Visibility)
    visibility?: Optional<Visibility>;

}

