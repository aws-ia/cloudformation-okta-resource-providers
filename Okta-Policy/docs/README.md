# Okta::Policy::Policy

An example resource schema demonstrating some basic constructs and validation rules.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Okta::Policy::Policy",
    "Properties" : {
        "<a href="#oktaaccess" title="OktaAccess">OktaAccess</a>" : <i><a href="oktaaccess.md">OktaAccess</a></i>,
        "<a href="#type" title="Type">Type</a>" : <i>String</i>,
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#system" title="System">System</a>" : <i>Boolean</i>,
        "<a href="#description" title="Description">Description</a>" : <i>String</i>,
        "<a href="#priority" title="Priority">Priority</a>" : <i>Integer</i>,
        "<a href="#status" title="Status">Status</a>" : <i>String</i>,
        "<a href="#conditions" title="Conditions">Conditions</a>" : <i>Map</i>,
        "<a href="#settings" title="Settings">Settings</a>" : <i>Map</i>,
        "<a href="#policy" title="Policy">Policy</a>" : <i><a href="policy.md">Policy</a></i>
    }
}
</pre>

### YAML

<pre>
Type: Okta::Policy::Policy
Properties:
    <a href="#oktaaccess" title="OktaAccess">OktaAccess</a>: <i><a href="oktaaccess.md">OktaAccess</a></i>
    <a href="#type" title="Type">Type</a>: <i>String</i>
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#system" title="System">System</a>: <i>Boolean</i>
    <a href="#description" title="Description">Description</a>: <i>String</i>
    <a href="#priority" title="Priority">Priority</a>: <i>Integer</i>
    <a href="#status" title="Status">Status</a>: <i>String</i>
    <a href="#conditions" title="Conditions">Conditions</a>: <i>Map</i>
    <a href="#settings" title="Settings">Settings</a>: <i>Map</i>
    <a href="#policy" title="Policy">Policy</a>: <i><a href="policy.md">Policy</a></i>
</pre>

## Properties

#### OktaAccess

_Required_: No

_Type_: <a href="oktaaccess.md">OktaAccess</a>

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

#### Policy

_Required_: No

_Type_: <a href="policy.md">Policy</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

Identifier of the Policy

