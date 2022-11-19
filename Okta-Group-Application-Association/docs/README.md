# Okta::Group::GroupApplicationAssociation

An example resource schema demonstrating some basic constructs and validation rules.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Okta::Group::GroupApplicationAssociation",
    "Properties" : {
        "<a href="#applicationid" title="ApplicationId">ApplicationId</a>" : <i>String</i>,
        "<a href="#groupid" title="GroupId">GroupId</a>" : <i>String</i>
    }
}
</pre>

### YAML

<pre>
Type: Okta::Group::GroupApplicationAssociation
Properties:
    <a href="#applicationid" title="ApplicationId">ApplicationId</a>: <i>String</i>
    <a href="#groupid" title="GroupId">GroupId</a>: <i>String</i>
</pre>

## Properties

#### ApplicationId

id of an app

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### GroupId

unique key of a valid Group

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

