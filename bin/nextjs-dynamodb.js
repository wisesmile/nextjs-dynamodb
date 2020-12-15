#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { NextjsDynamodbStack } = require('../lib/nextjs-dynamodb-stack');

const app = new cdk.App();
new NextjsDynamodbStack(app, 'NextjsDynamodbStack');
