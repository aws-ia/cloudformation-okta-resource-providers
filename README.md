# Okta CloudFormation Resource Types

This collection of [AWS CloudFormation resource types][1] allow Okta to be controlled using [AWS CloudFormation][2].

| Resource                                 | Description                                                            | Documentation                             |
|------------------------------------------|------------------------------------------------------------------------|-------------------------------------------|
| Okta::Application::Application           | This resource type manages an [Okta Application][10]                   | [/Okta-Application][11]                   |
| Okta::Group::Group                       | This resource type manages an [Okta Group][12]                         | [/Okta-Group][13]                         |
| Okta::Group::GroupApplicationAssociation | This resource type manages an [Okta Group Application Association][14] | [/Okta-Group-Application-Association][15] |
| Okta::Group::Membership                  | This resource type manages an [Okta Group Membership][16]              | [/Okta-Group-Membership][17]              |
| Okta::Policy::Policy                     | This resource type manages an [Okta Policy][18]                        | [/Okta-Policy][19]                        |

## Prerequisites
* [AWS Account][3]
* [AWS CLI][4]
* [Okta account][20] and [Okta API Key][21]

## AWS Management Console

To get started:

1. Sign in to the [AWS Management Console][5] with your account and navigate to CloudFormation.

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
  --type-name Okta::Application::Application \
  --configuration-alias default \
  --configuration "{ \"OktaAccess\":{\"Url\":\"YOUROKTAURL\", \"ApiKey\":\"YOUROKTAAPIKEY\"}}"
  ```

Note: All Okta resources requires a type configuration to be set.

7. After you have your resource configured, [create your AWS stack][6] that includes any of the activated Okta resources.

For more information about available commands and workflows, see the official [AWS documentation][7].

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

### Shows how to create an Application in Okta
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create an Application in Okta
Resources:
  NewOktaApp:
    Type: Okta::Application::Application
    Properties:
      Name: "template_basic_auth"
      Label: "CFN Sample Application"
      SignOnMode: "BASIC_AUTH"
      Settings:
        App:
          Url: "https://example.com/login.html"
          AuthURL: "https://example.com/auth.html"
```

### Shows how to create a Group in Okta
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Group in Okta
Resources:
  NewOktaGroup:
    Type: Okta::Group::Group
    Properties:
      Profile:
        Name: CFN Sample Group
        Description: Description of the CFN Sample Group
```

### Shows how to create a Group Application Association in Okta
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Group Application Association in Okta
Resources:
  NewGroupAssociation:
    Type: Okta::Group::GroupApplicationAssociation
    Properties:
      ApplicationId: MyApplicationId
      GroupId: MyGroupId
```

### Shows how to create a Group Membership in Okta
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Group Membership in Okta
Resources:
  NewGroupUserMembership:
    Type: Okta::Group::Membership
    Properties:
      GroupId: !GetAtt NewOktaGroup.Id
      UserLogin: EMAIL_FOR_EXISTING_USER
```

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
              - MyGroupId
```

[1]: https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html
[2]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html
[3]: https://aws.amazon.com/account/
[4]: https://aws.amazon.com/cli/
[5]: https://aws.amazon.com/console/
[6]: https://console.aws.amazon.com/cloudformation/home
[7]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

[10]: https://help.okta.com/eu/en-us/Content/Topics/end-user/eu-sign-in-to-apps.htm
[11]: ./Okta-Application/
[12]: https://help.okta.com/en-us/Content/Topics/users-groups-profiles/usgp-assign-app-group.htm
[13]: ./Okta-Group/
[14]: https://help.okta.com/eu/en-us/Content/Topics/end-user/eu-sign-in-to-apps.htm
[15]: ./Okta-Group-Application-Association/
[16]: https://help.okta.com/en-us/Content/Topics/users-groups-profiles/usgp-assign-group-people.htm
[17]: ./Okta-Group-Membership/
[18]: https://developer.okta.com/docs/concepts/policies/
[19]: ./Okta-Policy/

[20]: https://okta.com/
[21]: https://developer.okta.com/docs/guides/create-an-api-token/main/
