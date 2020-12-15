const cdk = require("@aws-cdk/core");
const dynamo = require("@aws-cdk/aws-dynamodb");

class NextjsDynamodbStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // https://docs.aws.amazon.com/cdk/api/latest/docs/aws-dynamodb-readme.html
    new dynamo.Table(this, "Items", {
      billingMode: dynamo.BillingMode.PAY_PER_REQUEST, // Use on-demand billing mode
      partitionKey: { name: "id", type: dynamo.AttributeType.STRING },
    });
  }
}

module.exports = { NextjsDynamodbStack };
