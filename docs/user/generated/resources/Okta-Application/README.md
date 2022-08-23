# Okta::Application::Application

Manage an Application in Okta.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Okta::Application::Application",
    "Properties" : {
        "<a href="#accessibility" title="Accessibility">Accessibility</a>" : <i><a href="accessibility.md">Accessibility</a></i>,
        "<a href="#credentials" title="Credentials">Credentials</a>" : <i><a href="applicationcredentials.md">ApplicationCredentials</a></i>,
        "<a href="#label" title="Label">Label</a>" : <i>String</i>,
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#requestobjectsigningalg" title="RequestObjectSigningAlg">RequestObjectSigningAlg</a>" : <i>String</i>,
        "<a href="#settings" title="Settings">Settings</a>" : <i>Map</i>,
        "<a href="#signonmode" title="SignOnMode">SignOnMode</a>" : <i>String</i>,
        "<a href="#visibility" title="Visibility">Visibility</a>" : <i><a href="visibility.md">Visibility</a></i>,
    }
}
</pre>

### YAML

<pre>
Type: Okta::Application::Application
Properties:
    <a href="#accessibility" title="Accessibility">Accessibility</a>: <i><a href="accessibility.md">Accessibility</a></i>
    <a href="#credentials" title="Credentials">Credentials</a>: <i><a href="applicationcredentials.md">ApplicationCredentials</a></i>
    <a href="#label" title="Label">Label</a>: <i>String</i>
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#requestobjectsigningalg" title="RequestObjectSigningAlg">RequestObjectSigningAlg</a>: <i>String</i>
    <a href="#settings" title="Settings">Settings</a>: <i>Map</i>
    <a href="#signonmode" title="SignOnMode">SignOnMode</a>: <i>String</i>
    <a href="#visibility" title="Visibility">Visibility</a>: <i><a href="visibility.md">Visibility</a></i>
</pre>

## Properties

#### Accessibility

Specifies access settings for the application

_Required_: No

_Type_: <a href="accessibility.md">Accessibility</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Credentials

Specifies credentials and scheme for the application's signOnMode

_Required_: No

_Type_: <a href="applicationcredentials.md">ApplicationCredentials</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Label

User-defined display name for app

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

Unique key for app definition

_Required_: No

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### RequestObjectSigningAlg

The type of JSON Web Key Set (JWKS) algorithm that must be used for signing request object

_Required_: No

_Type_: String

_Allowed Values_: <code>HS256</code> | <code>HS384</code> | <code>HS512</code> | <code>RS256</code> | <code>RS384</code> | <code>RS512</code> | <code>ES256</code> | <code>ES384</code> | <code>ES512</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Settings

_Required_: No

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SignOnMode

_Required_: Yes

_Type_: String

_Allowed Values_: <code>AUTO_LOGIN</code> | <code>BASIC_AUTH</code> | <code>BOOKMARK</code> | <code>BROWSER_PLUGIN</code> | <code>Custom</code> | <code>OPENID_CONNECT</code> | <code>SAML_1_1</code> | <code>SAML_2_0</code> | <code>SECURE_PASSWORD_STORE</code> | <code>WS_FEDERATION</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Visibility

Specifies visibility settings for the application

_Required_: No

_Type_: <a href="visibility.md">Visibility</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

Unique key for app

#### Application

Application returned by Okta API

