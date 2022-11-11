# Okta::Group::Group

An experimental resource that creates an Okta group

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Okta::Group::Group",
    "Properties" : {
        "<a href="#profile" title="Profile">Profile</a>" : <i><a href="profile.md">Profile</a></i>,
    }
}
</pre>

### YAML

<pre>
Type: Okta::Group::Group
Properties:
    <a href="#profile" title="Profile">Profile</a>: <i><a href="profile.md">Profile</a></i>
</pre>

## Properties

#### Profile

_Required_: Yes

_Type_: <a href="profile.md">Profile</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

Unique key for Group

#### Group

Returns the <code>Group</code> value.

