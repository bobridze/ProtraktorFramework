'use strict';

var EC     = protractor.ExpectedConditions;
var logger = require('./logger');
var DEFAULT_TIMEOUT = 5000;

var waitHelper = {

  waitForVisible: function (el, timeout) {
    return browser.wait(EC.visibilityOf(el), timeout || DEFAULT_TIMEOUT,
      'Timed out waiting for element to be visible');
  },

  waitForClickable: function (el, timeout) {
    return browser.wait(EC.elementToBeClickable(el), timeout || DEFAULT_TIMEOUT,
      'Timed out waiting for element to be clickable');
  },

  waitForPresence: function (el, timeout) {
    return browser.wait(EC.presenceOf(el), timeout || DEFAULT_TIMEOUT,
      'Timed out waiting for element to be present in DOM');
  },

  waitForUrlContains: function (urlPart, timeout) {
    return browser.wait(EC.urlContains(urlPart), timeout || DEFAULT_TIMEOUT,
      'Timed out waiting for URL to contain: ' + urlPart);
  }

};

module.exports = waitHelper;
