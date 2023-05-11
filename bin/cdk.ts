import 'source-map-support/register';
import { GuRootExperimental } from '@guardian/cdk/lib/experimental/constructs';
import { RecipeDataHackday2023 } from '../lib/recipe-data-hackday-2023';

const app = new GuRootExperimental();
new RecipeDataHackday2023(app, 'RecipeDataHackday2023-CODE', {
	stack: 'playground',
	stage: 'CODE',
	env: {
		region: 'eu-west-1',
	},
});
