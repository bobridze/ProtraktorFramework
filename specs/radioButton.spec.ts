import { browser } from 'protractor';
import { radioButtonPage } from '../pages/demoqa.radioButtonPage';

describe('Radio Button Page Tests', () => {

  beforeEach(() => {
    radioButtonPage.open();
  });

  // --- Positive Tests ---

  it('[TC-040] should have the correct page title', () => {
    expect(radioButtonPage.getTitle()).toContain('demosite');
  });

  it('[TC-041] should display "Radio Button" as page header', () => {
    expect(radioButtonPage.getPageHeaderText()).toBe('Radio Button');
  });

  it('[TC-042] should display correct URL', () => {
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/radio-button');
  });

  it('[TC-043] should select "Yes" radio button and display success text', () => {
    radioButtonPage.selectYes();

    expect(radioButtonPage.isYesSelected()).toBe(true);
    expect(radioButtonPage.getSuccessText()).toContain('Yes');
  });

  it('[TC-044] should select "Impressive" radio button and display success text', () => {
    radioButtonPage.selectImpressive();

    expect(radioButtonPage.isImpressiveSelected()).toBe(true);
    expect(radioButtonPage.getSuccessText()).toContain('Impressive');
  });

  it('[TC-045] should switch selection from "Yes" to "Impressive"', () => {
    radioButtonPage.selectYes();
    expect(radioButtonPage.isYesSelected()).toBe(true);

    radioButtonPage.selectImpressive();
    expect(radioButtonPage.isImpressiveSelected()).toBe(true);
    expect(radioButtonPage.isYesSelected()).toBe(false);
    expect(radioButtonPage.getSuccessText()).toContain('Impressive');
  });

  it('[TC-046] should switch selection from "Impressive" to "Yes"', () => {
    radioButtonPage.selectImpressive();
    expect(radioButtonPage.isImpressiveSelected()).toBe(true);

    radioButtonPage.selectYes();
    expect(radioButtonPage.isYesSelected()).toBe(true);
    expect(radioButtonPage.isImpressiveSelected()).toBe(false);
    expect(radioButtonPage.getSuccessText()).toContain('Yes');
  });

  it('[TC-047] should display correct footer text', () => {
    expect(radioButtonPage.getFooterText()).toContain('TOOLSQA.COM | ALL RIGHTS RESERVED');
  });

  // --- Negative Tests ---

  it('[TC-048] should have the "No" radio button disabled', () => {
    expect(radioButtonPage.isNoDisabled()).toBe(true);
  });

  it('[TC-049] should not have "No" radio button selected by default', () => {
    expect(radioButtonPage.noRadio.isSelected()).toBe(false);
  });

  it('[TC-050] should not have any radio button selected by default', () => {
    expect(radioButtonPage.yesRadio.isSelected()).toBe(false);
    expect(radioButtonPage.impressiveRadio.isSelected()).toBe(false);
    expect(radioButtonPage.noRadio.isSelected()).toBe(false);
  });

  it('[TC-051] should not display success text when no radio button is selected', () => {
    expect(radioButtonPage.successText.isPresent()).toBe(false);
  });

  it('[TC-052] should only have one radio button selected at a time', () => {
    radioButtonPage.selectYes();
    radioButtonPage.selectImpressive();

    expect(radioButtonPage.isYesSelected()).toBe(false);
    expect(radioButtonPage.isImpressiveSelected()).toBe(true);
  });

});
