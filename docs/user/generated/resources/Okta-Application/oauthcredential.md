# Okta::Application::Application OauthCredential

Determines how to authenticate the OAuth 2.0 client

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#autokeyrotation" title="AutoKeyRotation">AutoKeyRotation</a>" : <i>Boolean</i>,
    "<a href="#clientid" title="ClientId">ClientId</a>" : <i>String</i>,
    "<a href="#clientsecret" title="ClientSecret">ClientSecret</a>" : <i>String</i>,
    "<a href="#tokenendpointauthmethod" title="TokenEndpointAuthMethod">TokenEndpointAuthMethod</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#autokeyrotation" title="AutoKeyRotation">AutoKeyRotation</a>: <i>Boolean</i>
<a href="#clientid" title="ClientId">ClientId</a>: <i>String</i>
<a href="#clientsecret" title="ClientSecret">ClientSecret</a>: <i>String</i>
<a href="#tokenendpointauthmethod" title="TokenEndpointAuthMethod">TokenEndpointAuthMethod</a>: <i>String</i>
</pre>

## Properties

#### AutoKeyRotation

Requested key rotation mode

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ClientId

Unique identifier for the OAuth 2.0 client application

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ClientSecret

OAuth 2.0 client secret string

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TokenEndpointAuthMethod

Requested authentication method for the token endpoint

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

