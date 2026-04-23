import { browser } from 'protractor';
import { formsPage } from '../pages/demoqa.formsPage';

describe('Forms Page Tests', () => {

  beforeEach(async () => {
    await formsPage.open();
  });

  it('[TC-023] should have the correct page title', async () => {
    expect(await formsPage.getTitle()).toContain('demosite');
  });

  it('[TC-024] should display 1 menu item in the left panel', async () => {
    expect(await formsPage.getMenuItemCount()).toBe(1);
  });

  it('[TC-025] should open Practice Form page when clicking Practice Form menu item', async () => {
    await formsPage.clickMenuItem(formsPage.practiceFormMenuItem);
    expect(await browser.getCurrentUrl()).toContain('https://demoqa.com/automation-practice-form');
  });

  it('[TC-026] should display correct footer text', async () => {
    expect(await formsPage.getFooterText()).toContain('TOOLSQA.COM | ALL RIGHTS RESERVED');
  });

});
