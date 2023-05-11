import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { RecipeDataHackday2023 } from "../lib/recipe-data-hackday-2023";

const app = new App();
new RecipeDataHackday2023(app, "RecipeDataHackday2023-CODE", { stack: "playground", stage: "CODE" });
