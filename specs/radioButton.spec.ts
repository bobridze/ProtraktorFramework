import { browser } from 'protractor';
import { radioButtonPage } from '../pages/demoqa.radioButtonPage';

describe('Radio Button Page Tests', () => {

  beforeEach(async () => {
    await radioButtonPage.open();
  });

  // --- Positive Tests ---

  it('[TC-040] should have the correct page title', async () => {
    expect(await radioButtonPage.getTitle()).toContain('demosite');
  });

  it('[TC-041] should display "Radio Button" as page header', async () => {
    expect(await radioButtonPage.getPageHeaderText()).toBe('Radio Button');
  });

  it('[TC-042] should display correct URL', async () => {
    expect(await browser.getCurrentUrl()).toContain('https://demoqa.com/radio-button');
  });

  it('[TC-043] should select "Yes" radio button and display success text', async () => {
    await radioButtonPage.selectYes();

    expect(await radioButtonPage.isYesSelected()).toBe(true);
    expect(await radioButtonPage.getSuccessText()).toContain('Yes');
  });

  it('[TC-044] should select "Impressive" radio button and display success text', async () => {
    await radioButtonPage.selectImpressive();

    expect(await radioButtonPage.isImpressiveSelected()).toBe(true);
    expect(await radioButtonPage.getSuccessText()).toContain('Impressive');
  });

  it('[TC-045] should switch selection from "Yes" to "Impressive"', async () => {
    await radioButtonPage.selectYes();
    expect(await radioButtonPage.isYesSelected()).toBe(true);

    await radioButtonPage.selectImpressive();
    expect(await radioButtonPage.isImpressiveSelected()).toBe(true);
    expect(await radioButtonPage.isYesSelected()).toBe(false);
    expect(await radioButtonPage.getSuccessText()).toContain('Impressive');
  });

  it('[TC-046] should switch selection from "Impressive" to "Yes"', async () => {
    await radioButtonPage.selectImpressive();
    expect(await radioButtonPage.isImpressiveSelected()).toBe(true);

    await radioButtonPage.selectYes();
    expect(await radioButtonPage.isYesSelected()).toBe(true);
    expect(await radioButtonPage.isImpressiveSelected()).toBe(false);
    expect(await radioButtonPage.getSuccessText()).toContain('Yes');
  });

  it('[TC-047] should display correct footer text', async () => {
    expect(await radioButtonPage.getFooterText()).toContain('TOOLSQA.COM | ALL RIGHTS RESERVED');
  });

  // --- Negative Tests ---

  it('[TC-048] should have the "No" radio button disabled', async () => {
    expect(await radioButtonPage.isNoDisabled()).toBe(true);
  });

  it('[TC-049] should not have "No" radio button selected by default', async () => {
    expect(await radioButtonPage.noRadio.isSelected()).toBe(false);
  });

  it('[TC-050] should not have any radio button selected by default', async () => {
    expect(await radioButtonPage.yesRadio.isSelected()).toBe(false);
    expect(await radioButtonPage.impressiveRadio.isSelected()).toBe(false);
    expect(await radioButtonPage.noRadio.isSelected()).toBe(false);
  });

  it('[TC-051] should not display success text when no radio button is selected', async () => {
    expect(await radioButtonPage.successText.isPresent()).toBe(false);
  });

  it('[TC-052] should only have one radio button selected at a time', async () => {
    await radioButtonPage.selectYes();
    await radioButtonPage.selectImpressive();

    expect(await radioButtonPage.isYesSelected()).toBe(false);
    expect(await radioButtonPage.isImpressiveSelected()).toBe(true);
  });

});
