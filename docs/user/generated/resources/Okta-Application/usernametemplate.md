# Okta::Application::Application UserNameTemplate

Specifies the template used to generate a user's username when the application is assigned via a group or directly to a user

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#template" title="Template">Template</a>" : <i>String</i>,
    "<a href="#type" title="Type">Type</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#template" title="Template">Template</a>: <i>String</i>
<a href="#type" title="Type">Type</a>: <i>String</i>
</pre>

## Properties

#### Template

mapping expression for username

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Type

type of mapping expression

_Required_: Yes

_Type_: String

_Allowed Values_: <code>NONE</code> | <code>BUILT_IN</code> | <code>CUSTOM</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

