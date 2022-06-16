# Okta::Group::Membership

An example resource schema demonstrating some basic constructs and validation rules.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Okta::Group::Membership",
    "Properties" : {
        "<a href="#groupid" title="GroupId">GroupId</a>" : <i>String</i>,
        "<a href="#useridentifier" title="UserIdentifier">UserIdentifier</a>" : <i><a href="useridentifier.md">UserIdentifier</a></i>
    }
}
</pre>

### YAML

<pre>
Type: Okta::Group::Membership
Properties:
    <a href="#groupid" title="GroupId">GroupId</a>: <i>String</i>
    <a href="#useridentifier" title="UserIdentifier">UserIdentifier</a>: <i><a href="useridentifier.md">UserIdentifier</a></i>
</pre>

## Properties

#### GroupId

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### UserIdentifier

_Required_: Yes

_Type_: <a href="useridentifier.md">UserIdentifier</a>

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

