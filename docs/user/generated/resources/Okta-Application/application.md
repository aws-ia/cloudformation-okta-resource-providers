# Okta::Application::Application Application

Application returned by Okta API

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#accessibility" title="Accessibility">Accessibility</a>" : <i><a href="accessibility.md">Accessibility</a></i>,
    "<a href="#created" title="Created">Created</a>" : <i>String</i>,
    "<a href="#credentials" title="Credentials">Credentials</a>" : <i><a href="applicationcredentials.md">ApplicationCredentials</a></i>,
    "<a href="#features" title="Features">Features</a>" : <i>String</i>,
    "<a href="#id" title="Id">Id</a>" : <i>String</i>,
    "<a href="#label" title="Label">Label</a>" : <i>String</i>,
    "<a href="#lastupdated" title="LastUpdated">LastUpdated</a>" : <i>String</i>,
    "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    "<a href="#requestobjectsigningalg" title="RequestObjectSigningAlg">RequestObjectSigningAlg</a>" : <i>String</i>,
    "<a href="#settings" title="Settings">Settings</a>" : <i>Map</i>,
    "<a href="#signonmode" title="SignOnMode">SignOnMode</a>" : <i>String</i>,
    "<a href="#status" title="Status">Status</a>" : <i>String</i>,
    "<a href="#visibility" title="Visibility">Visibility</a>" : <i><a href="visibility.md">Visibility</a></i>
}
</pre>

### YAML

<pre>
<a href="#accessibility" title="Accessibility">Accessibility</a>: <i><a href="accessibility.md">Accessibility</a></i>
<a href="#created" title="Created">Created</a>: <i>String</i>
<a href="#credentials" title="Credentials">Credentials</a>: <i><a href="applicationcredentials.md">ApplicationCredentials</a></i>
<a href="#features" title="Features">Features</a>: <i>String</i>
<a href="#id" title="Id">Id</a>: <i>String</i>
<a href="#label" title="Label">Label</a>: <i>String</i>
<a href="#lastupdated" title="LastUpdated">LastUpdated</a>: <i>String</i>
<a href="#name" title="Name">Name</a>: <i>String</i>
<a href="#requestobjectsigningalg" title="RequestObjectSigningAlg">RequestObjectSigningAlg</a>: <i>String</i>
<a href="#settings" title="Settings">Settings</a>: <i>Map</i>
<a href="#signonmode" title="SignOnMode">SignOnMode</a>: <i>String</i>
<a href="#status" title="Status">Status</a>: <i>String</i>
<a href="#visibility" title="Visibility">Visibility</a>: <i><a href="visibility.md">Visibility</a></i>
</pre>

## Properties

#### Accessibility

_Required_: No

_Type_: <a href="accessibility.md">Accessibility</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Created

Timestamp when app was created

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Credentials

_Required_: No

_Type_: <a href="applicationcredentials.md">ApplicationCredentials</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Features

Applications may support optional provisioning features on a per-app basis.

_Required_: No

_Type_: String

_Allowed Values_: <code>GROUP_PUSH</code> | <code>IMPORT_NEW_USER</code> | <code>IMPORT_PROFILE_UPDATES</code> | <code>IMPORT_USER_SCHEMA</code> | <code>PROFILE_MASTERING</code> | <code>PUSH_NEW_USERS</code> | <code>PUSH_PASSWORD_UPDATES</code> | <code>PUSH_PROFILE_UPDATES</code> | <code>PUSH_USER_DEACTIVATION</code> | <code>REACTIVATE_USERS</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Id

Unique key for app

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Label

User-defined display name for app

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### LastUpdated

Timestamp when app was last updated

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

Unique key for app definition

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

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

_Required_: No

_Type_: String

_Allowed Values_: <code>AUTO_LOGIN</code> | <code>BASIC_AUTH</code> | <code>BOOKMARK</code> | <code>BROWSER_PLUGIN</code> | <code>Custom</code> | <code>OPENID_CONNECT</code> | <code>SAML_1_1</code> | <code>SAML_2_0</code> | <code>SECURE_PASSWORD_STORE</code> | <code>WS_FEDERATION</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Status

Status of app

_Required_: No

_Type_: String

_Allowed Values_: <code>ACTIVE</code> | <code>INACTIVE</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Visibility

_Required_: No

_Type_: <a href="visibility.md">Visibility</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

