# Okta::Policy::Policy

This resource type manages an [Okta Application][1]

[Documentation][2]

## Prerequisites
* [AWS Account][14]
* [AWS CLI][15]
* [Okta account][16] and [API key][17]

To get started:

1. Sign in to the [AWS Management Console][11] with your account and navigate to CloudFormation.

2. Select "Public extensions" from the left hand pane and filter Publisher by "Third Party".

3. Use the search bar to filter by the "Okta" prefix.

Note: All official Okta resources begin with `Okta::` and specify that they are `Published by Okta`.

4. Select the desired resource name to view more information about its schema, and click **Activate**.

5. On the **Extension details** page, specify:
- Extension name
- Execution role ARN
- Automatic updates for minor version releases
- Configuration

6. In your terminal, specify the configuration data for the registered Okta CloudFormation resource type, in the given account and region by using the **SetTypeConfiguration** operation:


For example:

  ```Bash
  $ aws cloudformation set-type-configuration \
  --region us-west-2 --type RESOURCE \
  --type-name Okta::Policy::Policy \
  --configuration-alias default \
  --configuration "{ \"OktaAccess\":{\"Url\":\"YOUOKTAURL\", \"ApiKey\":\"YOUROKTAAPIKEY\"}}"
  ```

7. After you have your resource configured, [create your AWS stack][12] that includes any of the activated Okta resources.

For more information about available commands and workflows, see the official [AWS documentation][13].

## Supported regions

The Okta CloudFormation resources are available on the CloudFormation Public Registry in the following regions:

| Code            | Name                      |
|-----------------|---------------------------|
| us-east-1       | US East (N. Virginia)     |
| us-east-2       | US East (Ohio)            |
| us-west-1       | US West (N. California)   |
| us-west-2       | US West (Oregon)          |
| ap-south-1      | Asia Pacific (Mumbai)     |
| ap-northeast-1  | Asia Pacific (Tokyo)      |
| ap-northeast-2  | Asia Pacific (Seoul)      |
| ap-southeast-1  | Asia Pacific (Singapore)  |
| ap-southeast-2  | Asia Pacific (Sydney)     |
| ca-central-1    | Canada (Central)          |
| eu-central-1    | Europe (Frankfurt)        |
| eu-west-1       | Europe (Ireland)          |
| eu-west-2       | Europe (London)           |
| eu-west-3       | Europe (Paris)            |
| eu-north-1      | Europe (Stockholm)        |
| sa-east-1       | South America (São Paulo) |

**Note**: To privately register a resource in any other region, use the provided packages.

## Examples


### Shows how to create a Policy in Okta
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Policy in Okta
Resources:
  NewGroupPolicy:
    Type: Okta::Policy::Policy
    Properties:
      Type: OKTA_SIGN_ON
      Name: My Policy
      Description: My Policy Description
      Conditions:
        People:
          Groups:
            Include:
              - MyOktaGroupId
```

[1]: https://developer.okta.com/docs/concepts/policies/
[2]: ./docs/

[11]: https://aws.amazon.com/console/
[12]: https://console.aws.amazon.com/cloudformation/home
[13]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html
[14]: https://aws.amazon.com/account/
[15]: https://aws.amazon.com/cli/
[16]: https://www.okta.com/
[17]: https://developer.okta.com/docs/guides/create-an-api-token/main/
