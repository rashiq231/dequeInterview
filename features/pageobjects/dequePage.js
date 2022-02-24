"use strict";

module.exports = {
  navId: `#main-nav`,
  radioButtons: `//h3[text()="Let the Adventure Begin!"]/../form//input[@type="radio"]`,
  passenger: (number) =>
    `//div[contains(@id,"passenger${number}")]//select[contains(@id,"traveler${number}")]`,
  addTravalerButton: `#add-traveler`,
  videoHeader: `//div[@id="video-box"]//h3`,
  nextArrow: `//div[@class="vid-arrows nextvid"]/i`,
};
