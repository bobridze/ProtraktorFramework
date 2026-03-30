var elementsPage = require('../pages/demoqa.elementsPage');

describe('Elements Page Tests', function() {

  beforeEach(function() {
    elementsPage.open();
  });

  it('[TC-001] should have the correct page title', function() {
    expect(elementsPage.getTitle()).toContain('demosite');
  });

  it('[TC-002] should display 9 menu items in the left panel', function() {
    expect(elementsPage.getMenuItemCount()).toBe(9);
  });

  it('[TC-003] should open Text Box page when clicking Text Box menu item', function() {
    elementsPage.clickMenuItem(elementsPage.textBoxMenuItem);
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/text-box');
  });

  it('[TC-004] should open Check Box page when clicking Check Box menu item', function() {
    elementsPage.clickMenuItem(elementsPage.checkBoxMenuItem);
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/checkbox');
  });

  it('[TC-005] should open Radio Button page when clicking Radio Button menu item', function() {
    elementsPage.clickMenuItem(elementsPage.radioButtonMenuItem);
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/radio-button');
  });

  it('[TC-006] should open Web Tables page when clicking Web Tables menu item', function() {
    elementsPage.clickMenuItem(elementsPage.webTablesMenuItem);
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/webtables');
  });

  it('[TC-007] should open Buttons page when clicking Buttons menu item', function() {
    elementsPage.clickMenuItem(elementsPage.buttonsMenuItem);
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/buttons');
  });

  it('[TC-008] should open Links page when clicking Links menu item', function() {
    elementsPage.clickMenuItem(elementsPage.linksMenuItem);
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/links');
  });

  it('[TC-009] should open Broken Links - Images page when clicking that menu item', function() {
    elementsPage.clickMenuItem(elementsPage.brokenLinksMenuItem);
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/broken');
  });

  it('[TC-012] should FAIL because of incorrect footer text', function() {
    expect(elementsPage.getFooterText()).toContain('Wrong footer text');
  });

  it('[TC-010] should open Upload and Download page when clicking that menu item', function() {
    elementsPage.clickMenuItem(elementsPage.uploadDownloadMenuItem);
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/upload-download');
  });

  it('[TC-011] should open Dynamic Properties page when clicking that menu item', function() {
    elementsPage.clickMenuItem(elementsPage.dynamicPropsMenuItem);
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/dynamic-properties');
  });

  it('[TC-022] should display correct footer text', function() {
    expect(elementsPage.getFooterText()).toContain('TOOLSQA.COM | ALL RIGHTS RESERVED');
  });

});
