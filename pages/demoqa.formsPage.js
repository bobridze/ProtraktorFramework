'use strict';

var BasePage = require('./basePage');

class DemoQAFormsPage extends BasePage {
  constructor() {
    super('https://demoqa.com/forms');

    // Left-side menu items (Forms group — 2nd element-group)
    this.menuItems            = element.all(by.css('.element-group:nth-of-type(2) .element-list .menu-list .btn'));
    this.practiceFormMenuItem = element(by.xpath('//span[normalize-space(text())="Practice Form"]/..'));
  }

  clickMenuItem(menuItem) {
    this.scrollAndClick(menuItem);
  }

  getMenuItemCount() {
    return this.menuItems.count();
  }
}

module.exports = new DemoQAFormsPage();
