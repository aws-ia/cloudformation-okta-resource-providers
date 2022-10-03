# Okta::Application::Application ApplicationCredentials

Specifies credentials and scheme for the application's signOnMode

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#oauthclient" title="OauthClient">OauthClient</a>" : <i><a href="oauthcredential.md">OauthCredential</a></i>,
    "<a href="#password" title="Password">Password</a>" : <i>String</i>,
    "<a href="#scheme" title="Scheme">Scheme</a>" : <i>String</i>,
    "<a href="#signing" title="Signing">Signing</a>" : <i><a href="signingcredential.md">SigningCredential</a></i>,
    "<a href="#username" title="UserName">UserName</a>" : <i>String</i>,
    "<a href="#usernametemplate" title="UserNameTemplate">UserNameTemplate</a>" : <i><a href="usernametemplate.md">UserNameTemplate</a></i>
}
</pre>

### YAML

<pre>
<a href="#oauthclient" title="OauthClient">OauthClient</a>: <i><a href="oauthcredential.md">OauthCredential</a></i>
<a href="#password" title="Password">Password</a>: <i>String</i>
<a href="#scheme" title="Scheme">Scheme</a>: <i>String</i>
<a href="#signing" title="Signing">Signing</a>: <i><a href="signingcredential.md">SigningCredential</a></i>
<a href="#username" title="UserName">UserName</a>: <i>String</i>
<a href="#usernametemplate" title="UserNameTemplate">UserNameTemplate</a>: <i><a href="usernametemplate.md">UserNameTemplate</a></i>
</pre>

## Properties

#### OauthClient

Determines how to authenticate the OAuth 2.0 client

_Required_: Yes

_Type_: <a href="oauthcredential.md">OauthCredential</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Password

Specifies a password for a user

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Scheme

Authentication Scheme

_Required_: No

_Type_: String

_Allowed Values_: <code>ADMIN_SETS_CREDENTIALS</code> | <code>EDIT_PASSWORD_ONLY</code> | <code>EDIT_USERNAME_AND_PASSWORD</code> | <code>EXTERNAL_PASSWORD_SYNC</code> | <code>SHARED_USERNAME_AND_PASSWORD</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Signing

Determines the key used for signing assertions for the signOnMode

_Required_: Yes

_Type_: <a href="signingcredential.md">SigningCredential</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### UserName

Shared username for app

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### UserNameTemplate

Specifies the template used to generate a user's username when the application is assigned via a group or directly to a user

_Required_: No

_Type_: <a href="usernametemplate.md">UserNameTemplate</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

