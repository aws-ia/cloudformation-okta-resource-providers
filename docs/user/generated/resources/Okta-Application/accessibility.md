# Okta::Application::Application Accessibility

Specifies access settings for the application

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#errorredirecturl" title="ErrorRedirectUrl">ErrorRedirectUrl</a>" : <i>String</i>,
    "<a href="#selfservice" title="SelfService">SelfService</a>" : <i>Boolean</i>
}
</pre>

### YAML

<pre>
<a href="#errorredirecturl" title="ErrorRedirectUrl">ErrorRedirectUrl</a>: <i>String</i>
<a href="#selfservice" title="SelfService">SelfService</a>: <i>Boolean</i>
</pre>

## Properties

#### ErrorRedirectUrl

Custom error page for this application

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SelfService

Enable self-service application assignment

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

