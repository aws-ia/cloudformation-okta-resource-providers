# Okta::Policy::Policy Policy

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#id" title="Id">Id</a>" : <i>String</i>,
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    "<a href="#system" title="System">System</a>" : <i>Boolean</i>,
    "<a href="#description" title="Description">Description</a>" : <i>String</i>,
    "<a href="#priority" title="Priority">Priority</a>" : <i>Integer</i>,
    "<a href="#status" title="Status">Status</a>" : <i>String</i>,
    "<a href="#conditions" title="Conditions">Conditions</a>" : <i>Map</i>,
    "<a href="#settings" title="Settings">Settings</a>" : <i>Map</i>,
    "<a href="#created" title="Created">Created</a>" : <i>String</i>,
    "<a href="#lastupdated" title="LastUpdated">LastUpdated</a>" : <i>String</i>,
    "<a href="#links" title="Links">Links</a>" : <i><a href="links.md">Links</a></i>
}
</pre>

### YAML

<pre>
<a href="#id" title="Id">Id</a>: <i>String</i>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#name" title="Name">Name</a>: <i>String</i>
<a href="#system" title="System">System</a>: <i>Boolean</i>
<a href="#description" title="Description">Description</a>: <i>String</i>
<a href="#priority" title="Priority">Priority</a>: <i>Integer</i>
<a href="#status" title="Status">Status</a>: <i>String</i>
<a href="#conditions" title="Conditions">Conditions</a>: <i>Map</i>
<a href="#settings" title="Settings">Settings</a>: <i>Map</i>
<a href="#created" title="Created">Created</a>: <i>String</i>
<a href="#lastupdated" title="LastUpdated">LastUpdated</a>: <i>String</i>
<a href="#links" title="Links">Links</a>: <i><a href="links.md">Links</a></i>
</pre>

## Properties

#### Id

Identifier of the Policy

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Type

Specifies the type of Policy.

_Required_: No

_Type_: String

_Allowed Values_: <code>OKTA_SIGN_ON</code> | <code>PASSWORD</code> | <code>MFA_ENROLL</code> | <code>OAUTH_AUTHORIZATION_POLICY</code> | <code>IDP_DISCOVERY</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

Name of the Policy

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### System

This is set to true on system policies, which cannot be deleted.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

Description of the Policy.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Priority

Priority of the Policy

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Status

Status of the Policy: ACTIVE or INACTIVE

_Required_: No

_Type_: String

_Allowed Values_: <code>ACTIVE</code> | <code>INACTIVE</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Conditions

_Required_: No

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Settings

_Required_: No

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Created

Timestamp when the Policy was created

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### LastUpdated

Timestamp when the Policy was last modified

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Links

_Required_: No

_Type_: <a href="links.md">Links</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

