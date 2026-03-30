'use strict';

var waitHelper = require('../helpers/waitHelper');

var DemoQAMainPage = function () {
  this.url = 'https://demoqa.com/';

  // Header
  this.headerImage = element(by.css('header img'));
  this.seleniumTrainingLink = element(by.css('a[href="https://www.toolsqa.com/selenium-training/"]'));

  // Banner / Join Now
  this.joinNowButton = element(by.cssContainingText('.banner-btn, a, button', 'Join Now'));

  // Category cards
  this.categoryCards = element.all(by.css('.card'));
  this.elementsCard = element(by.xpath('//div[contains(@class,"card")]//h5[text()="Elements"]/..'));
  this.formsCard = element(by.xpath('//div[contains(@class,"card")]//h5[text()="Forms"]/..'));
  this.alertsCard = element(by.xpath('//div[contains(@class,"card")]//h5[text()="Alerts, Frame & Windows"]/..'));
  this.widgetsCard = element(by.xpath('//div[contains(@class,"card")]//h5[text()="Widgets"]/..'));
  this.interactionsCard = element(by.xpath('//div[contains(@class,"card")]//h5[text()="Interactions"]/..'));
  this.bookStoreCard = element(by.xpath('//div[contains(@class,"card")]//h5[text()="Book Store Application"]/..'));

  // Footer
  this.footer = element(by.css('footer'));
};

DemoQAMainPage.prototype.open = function () {
  browser.get(this.url);
};

DemoQAMainPage.prototype.getTitle = function () {
  return browser.getTitle();
};

DemoQAMainPage.prototype.clickJoinNow = function () {
  browser.executeScript('arguments[0].click();', this.seleniumTrainingLink.getWebElement());
};

DemoQAMainPage.prototype.clickCategoryCard = function (cardName) {
  var card = element(by.xpath('//a[.//h5[normalize-space(text())="' + cardName + '"]]'));
  browser.executeScript('arguments[0].scrollIntoView(true); arguments[0].click();', card.getWebElement());
};

DemoQAMainPage.prototype.getCategoryCardCount = function () {
  return this.categoryCards.count();
};

DemoQAMainPage.prototype.getFooterText = function () {
  return this.footer.getText();
};

module.exports = new DemoQAMainPage();
