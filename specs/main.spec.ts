import { browser } from 'protractor';
import { mainPage } from '../pages/demoqa.mainPage';

describe('Main Page Tests', () => {

  beforeEach(async () => {
    await mainPage.open();
  });

  it('[TC-013] Should have the correct page title', async () => {
    expect(await mainPage.getTitle()).toContain('demosite');
  });

  it('[TC-014] should open SeleniumTrainingPage when clicking JoinNowButton', async () => {
    const originalWindow = await browser.getWindowHandle();
    await mainPage.clickJoinNow();
    const handles = await browser.getAllWindowHandles();
    const newWindow = handles[handles.length - 1];
    await browser.switchTo().window(newWindow);
    expect(await browser.getCurrentUrl()).toContain('https://www.toolsqa.com/selenium-training/');
    await browser.close();
    await browser.switchTo().window(originalWindow);
  });

  it('[TC-015] should open Elements page when clicking Elements card', async () => {
    await mainPage.clickCategoryCard('Elements');
    expect(await browser.getCurrentUrl()).toContain('https://demoqa.com/elements');
  });

  it('[TC-016] should open Forms page when clicking Forms card', async () => {
    await mainPage.clickCategoryCard('Forms');
    expect(await browser.getCurrentUrl()).toContain('https://demoqa.com/forms');
  });

  it('[TC-017] should open Alerts, Frame & Windows page when clicking that card', async () => {
    await mainPage.clickCategoryCard('Alerts, Frame & Windows');
    expect(await browser.getCurrentUrl()).toContain('https://demoqa.com/alertsWindows');
  });

  it('[TC-018] should open Widgets page when clicking Widgets card', async () => {
    await mainPage.clickCategoryCard('Widgets');
    expect(await browser.getCurrentUrl()).toContain('https://demoqa.com/widgets');
  });

  it('[TC-019] should open Interactions page when clicking Interactions card', async () => {
    await mainPage.clickCategoryCard('Interactions');
    expect(await browser.getCurrentUrl()).toContain('https://demoqa.com/interaction');
  });

  it('[TC-020] should open Book Store Application page when clicking that card', async () => {
    await mainPage.clickCategoryCard('Book Store Application');
    expect(await browser.getCurrentUrl()).toContain('https://demoqa.com/books');
  });

  it('[TC-021] should display correct footer text', async () => {
    expect(await mainPage.getFooterText()).toContain('TOOLSQA.COM | ALL RIGHTS RESERVED');
  });

});
