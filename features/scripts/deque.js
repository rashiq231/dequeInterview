"use strict";

const dequeObjs = require("../pageobjects/dequePage");

module.exports = {
  openUrl: async () => {
    await browser.url(`https://dequeuniversity.com/demo/mars`);
  },

  navIdValidation: async function () {
    let navEle = await $(dequeObjs.navId);
    expect(navEle).toBeExisting({ message: "Nav id is not displayed" });
  },

  validateRadioButtons: async function (items) {
    console.log(items);
    let radioElements = await $$(dequeObjs.radioButtons);
    console.log(await radioElements.length);

    if (radioElements.length === parseInt(items)) {
      console.log("Number of items matched");
    } else {
      console.log("number of items not matched");
      throw new Error(" items not matched");
    }
  },

  verifyAddPassenger: async function () {
    let initalPassangerCount = 0;
    let passanger = await $(dequeObjs.passenger(initalPassangerCount));
    expect(passanger).toBeDisplayed();
    let addTraverButton = await $(dequeObjs.addTravalerButton);

    addTraverButton.click();
    initalPassangerCount++;
    let newPassanger = await $(dequeObjs.passenger(initalPassangerCount));
    expect(newPassanger).toBeDisplayed({
      message: "New passenger not added",
    });
  },

  validateVideoHeaderChange: async function () {
    let headerElem = await $(dequeObjs.videoHeader);
    let intialHeaderText = await headerElem.getText();
    let arrowElem = await $(dequeObjs.nextArrow);
    await arrowElem.click();

    let secondHeaderText = await headerElem.getText();

    console.log(intialHeaderText);
    console.log(secondHeaderText);
    if (intialHeaderText == secondHeaderText) {
      throw new Error(" text are did not change");
    }
  },
};
