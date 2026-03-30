'use strict';

var mainPage = require('../pages/demoqa.mainPage');

describe('Main Page Tests', function() {

  beforeEach(function() {
    mainPage.open();
  });

  it('[TC-013] Should have the correct page title', function() {
    expect(mainPage.getTitle()).toContain('demosite');
  });

  it('[TC-014] should open SeleniumTrainingPage when clicking JoinNowButton', function() {
    var originalWindow = browser.getWindowHandle();
    mainPage.clickJoinNow();
    browser.getAllWindowHandles().then(function(handles) {
      var newWindow = handles[handles.length - 1];
      browser.switchTo().window(newWindow);
      expect(browser.getCurrentUrl()).toContain('https://www.toolsqa.com/selenium-training/');
      browser.close();
      browser.switchTo().window(originalWindow);
    });
  });

  it('[TC-015] should open Elements page when clicking Elements card', function() {
    mainPage.clickCategoryCard('Elements');
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/elements');
  });

  it('[TC-016] should open Forms page when clicking Forms card', function() {
    mainPage.clickCategoryCard('Forms');
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/forms');
  });

  it('[TC-017] should open Alerts, Frame & Windows page when clicking that card', function() {
    mainPage.clickCategoryCard('Alerts, Frame & Windows');
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/alertsWindows');
  });

  it('[TC-018] should open Widgets page when clicking Widgets card', function() {
    mainPage.clickCategoryCard('Widgets');
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/widgets');
  });

  it('[TC-019] should open Interactions page when clicking Interactions card', function() {
    mainPage.clickCategoryCard('Interactions');
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/interaction');
  });

  it('[TC-020] should open Book Store Application page when clicking that card', function() {
    mainPage.clickCategoryCard('Book Store Application');
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/books');
  });

  it('[TC-021] should display correct footer text', function() {
    expect(mainPage.getFooterText()).toContain('TOOLSQA.COM | ALL RIGHTS RESERVED');
  });

});
