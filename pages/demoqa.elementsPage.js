'use strict';

var BasePage = require('./basePage');

class DemoQAElementsPage extends BasePage {
  constructor() {
    super('https://demoqa.com/elements');

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
  }

  clickMenuItem(menuItem) {
    this.scrollAndClick(menuItem);
  }

  getMenuItemCount() {
    return this.menuItems.count();
  }
}

module.exports = new DemoQAElementsPage();
