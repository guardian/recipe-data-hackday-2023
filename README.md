# Recipe Data, Hack Day 2023
A copy of the databases from https://github.com/guardian/recipes, deployed to the Playground account for the food-themed Hack Day in May 2023.

In the Playground account, within the `eu-west-1` region, find recipe data in:
  - DynamoDb tables `recipes` and `recipes-edited`
  - S3 bucket `recipe-data-hackday-2023`

## Data import process
1. Export data from DynamoDb tables in the Composer account (`recipes`, and `recipes-edited`)
2. Import the data into DynamoDb tables in the Playground account (`recipes`, and `recipes-edited`)

Initial attempts to follow https://repost.aws/knowledge-center/dynamodb-cross-account-migration to export/import via S3 failed.
The export worked, but the import failed with:

```log
Unexpected token. Remainder of the file will not be processed.
```

There was ~3MB of data to copy, so rather than investing too much time in this, I used https://www.npmjs.com/package/dynamodump instead.

The tables are created via CDK, see [lib/recipe-data-hackday-2023](lib/recipe-data-hackday-2023.ts).

## TODO after Hack Day
- [ ] Delete the CloudFormation stack in the Playground account
