import { Given, When, Then } from "@wdio/cucumber-framework";

// import { loginFun, openUrl } from "../scripts/login";

const dequeFun = require("../scripts/deque");

Given(/^I open the application url$/, dequeFun.openUrl);

Then(
  /^I verify if navId bar is displayed on the page$/,
  dequeFun.navIdValidation
);

Then(
  /^I verify the number of radion buttons under Let the Adventure Begin is (.*)$/,
  dequeFun.validateRadioButtons
);

Then(
  /^I verify new passanger details are added when clicked on add traveler$/,
  dequeFun.verifyAddPassenger
);

Then(
  /^I verify the video header text change when I click on an arrow button$/,
  dequeFun.validateVideoHeaderChange
);
