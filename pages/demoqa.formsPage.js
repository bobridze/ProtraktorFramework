'use strict';

var DemoQAFormsPage = function () {
  this.url = 'https://demoqa.com/forms';

  // Left-side menu items (Forms group)
  this.menuItems           = element.all(by.css('.element-group .element-list .menu-list .btn'));
  this.practiceFormMenuItem = element(by.xpath('//span[normalize-space(text())="Practice Form"]/..'));

  // Main content area
  this.pageHeader = element(by.css('.main-header'));
  this.footer     = element(by.css('footer'));
};

DemoQAFormsPage.prototype.open = function () {
  browser.get(this.url);
};

DemoQAFormsPage.prototype.getTitle = function () {
  return browser.getTitle();
};

DemoQAFormsPage.prototype.clickMenuItem = function (menuItem) {
  browser.executeScript('arguments[0].scrollIntoView(true); arguments[0].click();', menuItem.getWebElement());
};

DemoQAFormsPage.prototype.getPageHeaderText = function () {
  return this.pageHeader.getText();
};

DemoQAFormsPage.prototype.getMenuItemCount = function () {
  return this.menuItems.count();
};

DemoQAFormsPage.prototype.getFooterText = function () {
  return this.footer.getText();
};

module.exports = new DemoQAFormsPage();
