---
title: ECR Scanning using IAM Roles
---

### AWS ECR - IAM Roles
When the NeuVector containers are deployed in AWS, and an EC2 instance is assigned a role of “EC2 Container Registry” Read Access, the AWS ECR registry can be scanned without an Access Key and Secret Key.

Here is how to create an AWS role and assign it to the node.

#### Select the Instance
Note that the IAM role is either blank or does not include the ECR role
![awsrole](/img/06.scanning/02.registry/01.ecr-iam/ecr1.png)

#### Attach a Role
Select Actions -> Instance Settings -> Attach/Replace IAM Role
![awsrole](/img/06.scanning/02.registry/01.ecr-iam/ecr2.png)

If you have not previously created the ECR role, click Create New IAM Role. Enter the role name.
![attachrole](/img/06.scanning/02.registry/01.ecr-iam/ecr3.png)


#### Select the AWS Service
![select](/img/06.scanning/02.registry/01.ecr-iam/ecr4.png)

#### List of Roles
![awsroles](/img/06.scanning/02.registry/01.ecr-iam/ecr5.png)

#### Attach the ECR Read Permission to the Role
![permissions](/img/06.scanning/02.registry/01.ecr-iam/ecr6.png)

#### Review Your Settings

![review](/img/06.scanning/02.registry/01.ecr-iam/ecr7.png)


#### Check the Instance for IAM Role

![instance](/img/06.scanning/02.registry/01.ecr-iam/ecr9.png)