import { Aspects, CfnResource, IAspect, RemovalPolicy } from "aws-cdk-lib";
import { CfnInstance } from "aws-cdk-lib/aws-ec2";
import { CfnDBCluster, CfnDBInstance } from "aws-cdk-lib/aws-rds";
import { IConstruct } from "constructs";

export function ezCleanup(scope: IConstruct) {
  Aspects.of(scope).add(new EzCleanupAspect());
}

export class EzCleanupAspect implements IAspect {
  public visit(node: IConstruct): void {
    if (node instanceof CfnResource) {
      node.applyRemovalPolicy(RemovalPolicy.DESTROY);
    }

    if (node instanceof CfnDBInstance || node instanceof CfnDBCluster) {
      node.deletionProtection = false;
    }

    if (node instanceof CfnInstance) {
      node.disableApiTermination = false;
    }
  }
}
