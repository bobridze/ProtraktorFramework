'use strict';

var BasePage = require('./basePage');

class DemoQAMainPage extends BasePage {
  constructor() {
    super('https://demoqa.com/');

    // Header
    this.headerImage = element(by.css('header img'));
    this.seleniumTrainingLink = element(by.css('a[href="https://www.toolsqa.com/selenium-training/"]'));

    // Banner / Join Now
    this.joinNowButton = element(by.cssContainingText('.banner-btn, a, button', 'Join Now'));

    // Category cards
    this.categoryCards = element.all(by.css('.card'));
  }

  clickJoinNow() {
    this.scrollAndClick(this.seleniumTrainingLink);
  }

  clickCategoryCard(cardName) {
    var card = element(by.xpath('//a[.//h5[normalize-space(text())="' + cardName + '"]]'));
    this.scrollAndClick(card);
  }

  getCategoryCardCount() {
    return this.categoryCards.count();
  }
}

module.exports = new DemoQAMainPage();
