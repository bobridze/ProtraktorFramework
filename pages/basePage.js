'use strict';

var waitHelper = require('../helpers/waitHelper');

class BasePage {
  constructor(url) {
    this.url = url;
    this.footer = element(by.css('footer'));
    this.pageHeader = element(by.css('.main-header'));
  }

  open() {
    browser.get(this.url);
  }

  getTitle() {
    return browser.getTitle();
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  getFooterText() {
    return this.footer.getText();
  }

  getPageHeaderText() {
    waitHelper.waitForPresence(this.pageHeader);
    return this.pageHeader.getText();
  }

  scrollAndClick(el) {
    waitHelper.waitForPresence(el);
    browser.executeScript(
      'arguments[0].scrollIntoView({block: "center"}); arguments[0].click();',
      el.getWebElement()
    );
  }
}

module.exports = BasePage;
