# cdk-ez-cleanup

Easily delete Cloudformation stacks created using the AWS CDK without having to worry about removal policies or delete protection settings. This package is not intended for production environments.

## Install

```
npm i cdk-ez-cleanup
```

## Usage

Call the `ezCleanup` function on your CDK stack to apply easy cleanup settings.

```ts
ezCleanup(stack);
```

Alternatively, you can manually create an `EzCleanupAspect` and add it to a construct manually.

```ts
Aspects.of(stack).add(new EzCleanupAspect());
```
