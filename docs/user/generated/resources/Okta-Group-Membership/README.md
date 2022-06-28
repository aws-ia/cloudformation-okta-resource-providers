# Okta::Group::Membership

An example resource schema demonstrating some basic constructs and validation rules.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Okta::Group::Membership",
    "Properties" : {
        "<a href="#oktaaccess" title="OktaAccess">OktaAccess</a>" : <i><a href="oktaaccess.md">OktaAccess</a></i>,
        "<a href="#groupid" title="GroupId">GroupId</a>" : <i>String</i>,
        "<a href="#useridentifier" title="UserIdentifier">UserIdentifier</a>" : <i><a href="useridentifier.md">UserIdentifier</a></i>,
    }
}
</pre>

### YAML

<pre>
Type: Okta::Group::Membership
Properties:
    <a href="#oktaaccess" title="OktaAccess">OktaAccess</a>: <i><a href="oktaaccess.md">OktaAccess</a></i>
    <a href="#groupid" title="GroupId">GroupId</a>: <i>String</i>
    <a href="#useridentifier" title="UserIdentifier">UserIdentifier</a>: <i><a href="useridentifier.md">UserIdentifier</a></i>
</pre>

## Properties

#### OktaAccess

_Required_: No

_Type_: <a href="oktaaccess.md">OktaAccess</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### GroupId

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### UserIdentifier

_Required_: Yes

_Type_: <a href="useridentifier.md">UserIdentifier</a>

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return Values

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### GroupMembership

Returns the <code>GroupMembership</code> value.

