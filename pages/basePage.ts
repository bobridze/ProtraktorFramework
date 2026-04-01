import { browser, element, by, ElementFinder } from 'protractor';
import { waitHelper } from '../helpers/waitHelper';

export class BasePage {
  url: string;
  footer: ElementFinder;
  pageHeader: ElementFinder;

  constructor(url: string) {
    this.url = url;
    this.footer = element(by.css('footer'));
    this.pageHeader = element(by.css('.main-header'));
  }

  open(): void {
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

  scrollAndClick(el: ElementFinder): void {
    waitHelper.waitForPresence(el);
    browser.executeScript(
      'arguments[0].scrollIntoView({block: "center"}); arguments[0].click();',
      el.getWebElement()
    );
  }
}
