'use strict';

var formsPage = require('../pages/demoqa.formsPage');

describe('Forms Page Tests', function() {

  beforeEach(function() {
    formsPage.open();
  });

  it('[TC-023] should have the correct page title', function() {
    expect(formsPage.getTitle()).toContain('demosite');
  });

  it('[TC-024] should display 1 menu item in the left panel', function() {
    expect(formsPage.getMenuItemCount()).toBe(1);
  });

  it('[TC-025] should open Practice Form page when clicking Practice Form menu item', function() {
    formsPage.clickMenuItem(formsPage.practiceFormMenuItem);
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/automation-practice-form');
  });

  it('[TC-026] should display correct footer text', function() {
    expect(formsPage.getFooterText()).toContain('TOOLSQA.COM | ALL RIGHTS RESERVED');
  });

});
