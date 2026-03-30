'use strict';

var EC     = protractor.ExpectedConditions;
var logger = require('./logger');
var DEFAULT_TIMEOUT = 5000;

var waitHelper = {

  waitForVisible: function (el, timeout) {
    logger.debug('Waiting for element to be visible');
    return browser.wait(EC.visibilityOf(el), timeout || DEFAULT_TIMEOUT,
      'Timed out waiting for element to be visible');
  },

  waitForClickable: function (el, timeout) {
    logger.debug('Waiting for element to be clickable');
    return browser.wait(EC.elementToBeClickable(el), timeout || DEFAULT_TIMEOUT,
      'Timed out waiting for element to be clickable');
  },

  waitForPresence: function (el, timeout) {
    logger.debug('Waiting for element to be present in DOM');
    return browser.wait(EC.presenceOf(el), timeout || DEFAULT_TIMEOUT,
      'Timed out waiting for element to be present in DOM');
  },

  waitForUrlContains: function (urlPart, timeout) {
    logger.debug('Waiting for URL to contain: ' + urlPart);
    return browser.wait(EC.urlContains(urlPart), timeout || DEFAULT_TIMEOUT,
      'Timed out waiting for URL to contain: ' + urlPart);
  }

};

module.exports = waitHelper;
