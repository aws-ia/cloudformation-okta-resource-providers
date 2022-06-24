# Okta::Application::Application Visibility

Specifies visibility settings for the application

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#autolaunch" title="AutoLaunch">AutoLaunch</a>" : <i>Boolean</i>,
    "<a href="#autosubmittoolbar" title="AutoSubmitToolbar">AutoSubmitToolbar</a>" : <i>Boolean</i>,
    "<a href="#hide" title="Hide">Hide</a>" : <i><a href="hide.md">Hide</a></i>
}
</pre>

### YAML

<pre>
<a href="#autolaunch" title="AutoLaunch">AutoLaunch</a>: <i>Boolean</i>
<a href="#autosubmittoolbar" title="AutoSubmitToolbar">AutoSubmitToolbar</a>: <i>Boolean</i>
<a href="#hide" title="Hide">Hide</a>: <i><a href="hide.md">Hide</a></i>
</pre>

## Properties

#### AutoLaunch

Automatically signs in to the app when user signs into Okta.

_Required_: Yes

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AutoSubmitToolbar

Automatically sign in when user lands on the sign-in page

_Required_: Yes

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Hide

Hides this app for specific end-user apps

_Required_: Yes

_Type_: <a href="hide.md">Hide</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

