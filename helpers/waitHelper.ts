import { ElementFinder, browser, protractor } from 'protractor';

const EC = protractor.ExpectedConditions;
const DEFAULT_TIMEOUT = 5000;

export const waitHelper = {

  waitForVisible(el: ElementFinder, timeout?: number) {
    return browser.wait(EC.visibilityOf(el), timeout || DEFAULT_TIMEOUT,
      'Timed out waiting for element to be visible');
  },

  waitForClickable(el: ElementFinder, timeout?: number) {
    return browser.wait(EC.elementToBeClickable(el), timeout || DEFAULT_TIMEOUT,
      'Timed out waiting for element to be clickable');
  },

  waitForPresence(el: ElementFinder, timeout?: number) {
    return browser.wait(EC.presenceOf(el), timeout || DEFAULT_TIMEOUT,
      'Timed out waiting for element to be present in DOM');
  },

  waitForUrlContains(urlPart: string, timeout?: number) {
    return browser.wait(EC.urlContains(urlPart), timeout || DEFAULT_TIMEOUT,
      'Timed out waiting for URL to contain: ' + urlPart);
  }

};
