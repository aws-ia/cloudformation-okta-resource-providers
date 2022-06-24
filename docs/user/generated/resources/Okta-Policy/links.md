# Okta::Policy::Policy Links

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#self" title="Self">Self</a>" : <i>String</i>,
    "<a href="#activate" title="Activate">Activate</a>" : <i>String</i>,
    "<a href="#deactivate" title="Deactivate">Deactivate</a>" : <i>String</i>,
    "<a href="#rules" title="Rules">Rules</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#self" title="Self">Self</a>: <i>String</i>
<a href="#activate" title="Activate">Activate</a>: <i>String</i>
<a href="#deactivate" title="Deactivate">Deactivate</a>: <i>String</i>
<a href="#rules" title="Rules">Rules</a>: <i>String</i>
</pre>

## Properties

#### Self

The Policy or Rule

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Activate

Action to activate a Policy or Rule (present if the Rule is currently inactive)

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Deactivate

Action to deactivate a Policy or Rule (present if the Rule is currently active)

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Rules

Action to retrieve the Rules objects for the given Policy

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

