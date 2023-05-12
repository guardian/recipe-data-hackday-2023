import type { GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuStack } from '@guardian/cdk/lib/constructs/core';
import { Tags } from 'aws-cdk-lib';
import type { App } from 'aws-cdk-lib';
import { aws_s3 as s3 } from 'aws-cdk-lib';
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';

export class RecipeDataHackday2023 extends GuStack {
	constructor(scope: App, id: string, props: GuStackProps) {
		super(scope, id, props);

		new Table(this, 'RecipeTable', {
			tableName: 'recipes',
			partitionKey: { name: 'path', type: AttributeType.STRING },
			sortKey: { name: 'recipeId', type: AttributeType.NUMBER },
		});

		new Table(this, 'RecipeEditsTable', {
			tableName: 'recipes-edited',
			partitionKey: { name: 'path', type: AttributeType.STRING },
			sortKey: { name: 'recipeId', type: AttributeType.NUMBER },
		});

		new s3.Bucket(this, 'StructuredRecipes'); 

		Tags.of(this).add('App', 'recipe-data-hackday-2023');
	}
}
