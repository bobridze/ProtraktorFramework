'use strict';

var waitHelper = require('../helpers/waitHelper');

var DemoQAElementsPage = function () {
  this.url = 'https://demoqa.com/elements';

  // Left-side menu items (first group = Elements)
  this.menuItems = element.all(by.css('.element-group:first-of-type .element-list .menu-list .btn'));
  this.textBoxMenuItem       = element(by.xpath('//span[normalize-space(text())="Text Box"]/..'));
  this.checkBoxMenuItem      = element(by.xpath('//span[normalize-space(text())="Check Box"]/..'));
  this.radioButtonMenuItem   = element(by.xpath('//span[normalize-space(text())="Radio Button"]/..'));
  this.webTablesMenuItem     = element(by.xpath('//span[normalize-space(text())="Web Tables"]/..'));
  this.buttonsMenuItem       = element(by.xpath('//span[normalize-space(text())="Buttons"]/..'));
  this.linksMenuItem         = element(by.xpath('//span[normalize-space(text())="Links"]/..'));
  this.brokenLinksMenuItem   = element(by.xpath('//span[normalize-space(text())="Broken Links - Images"]/..'));
  this.uploadDownloadMenuItem = element(by.xpath('//span[normalize-space(text())="Upload and Download"]/..'));
  this.dynamicPropsMenuItem  = element(by.xpath('//span[normalize-space(text())="Dynamic Properties"]/..'));

  // Main content area
  this.pageHeader = element(by.css('.main-header'));
  this.footer     = element(by.css('footer'));
};

DemoQAElementsPage.prototype.open = function () {
  browser.get(this.url);
};

DemoQAElementsPage.prototype.getTitle = function () {
  return browser.getTitle();
};

DemoQAElementsPage.prototype.clickMenuItem = function (menuItem) {
  browser.executeScript('arguments[0].scrollIntoView(true); arguments[0].click();', menuItem.getWebElement());
};

DemoQAElementsPage.prototype.getPageHeaderText = function () {
  return this.pageHeader.getText();
};

DemoQAElementsPage.prototype.getMenuItemCount = function () {
  return this.menuItems.count();
};

DemoQAElementsPage.prototype.getFooterText = function () {
  return this.footer.getText();
};

module.exports = new DemoQAElementsPage();
