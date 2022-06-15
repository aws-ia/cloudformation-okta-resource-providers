# Okta::Application::Application Hide

Hides this app for specific end-user apps

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#ios" title="Ios">Ios</a>" : <i>Boolean</i>,
    "<a href="#web" title="Web">Web</a>" : <i>Boolean</i>
}
</pre>

### YAML

<pre>
<a href="#ios" title="Ios">Ios</a>: <i>Boolean</i>
<a href="#web" title="Web">Web</a>: <i>Boolean</i>
</pre>

## Properties

#### Ios

Okta Mobile for iOS or Android (pre-dates Android)

_Required_: Yes

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Web

Okta Web Browser Home Page

_Required_: Yes

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

