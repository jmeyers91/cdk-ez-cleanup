# cdk-ez-cleanup

Easily delete Cloudformation stacks created using the [AWS CDK](https://aws.amazon.com/cdk/) without having to worry about removal policies or delete protection settings. **This package is not intended for production environments.**

### Features

- Sets all removal policies to `RemovalPolicy.DESTROY`

- Disables delete protection on RDS database instances and clusters

- Disables termination protection on EC2 instances

## Install

```

npm i cdk-ez-cleanup

```

## Usage

Call the `ezCleanup` function on your CDK stack to apply easy cleanup settings.

```ts
ezCleanup(stack);
```

Alternatively, you can manually create an `EzCleanupAspect` and add it to a construct's [aspect](https://docs.aws.amazon.com/cdk/v2/guide/aspects.html) list.

```ts
Aspects.of(stack).add(new EzCleanupAspect());
```
