import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { RecipeDataHackday2023 } from "./recipe-data-hackday-2023";

describe("The RecipeDataHackday2023 stack", () => {
  it("matches the snapshot", () => {
    const app = new App();
    const stack = new RecipeDataHackday2023(app, "RecipeDataHackday2023", { stack: "playground", stage: "TEST" });
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });
});
