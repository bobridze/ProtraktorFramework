import { element, by, ElementFinder } from 'protractor';
import { BasePage } from './basePage';
import { waitHelper } from '../helpers/waitHelper';

class DemoQARadioButtonPage extends BasePage {
  yesRadio: ElementFinder;
  yesLabel: ElementFinder;
  impressiveRadio: ElementFinder;
  impressiveLabel: ElementFinder;
  noRadio: ElementFinder;
  noLabel: ElementFinder;
  successText: ElementFinder;

  constructor() {
    super('https://demoqa.com/radio-button');

    this.yesRadio         = element(by.id('yesRadio'));
    this.yesLabel         = element(by.css('label[for="yesRadio"]'));
    this.impressiveRadio  = element(by.id('impressiveRadio'));
    this.impressiveLabel  = element(by.css('label[for="impressiveRadio"]'));
    this.noRadio          = element(by.id('noRadio'));
    this.noLabel          = element(by.css('label[for="noRadio"]'));
    this.successText      = element(by.css('.mt-3'));
  }

  async selectYes(): Promise<void> {
    await this.scrollAndClick(this.yesLabel);
  }

  async selectImpressive(): Promise<void> {
    await this.scrollAndClick(this.impressiveLabel);
  }

  getSuccessText() {
    waitHelper.waitForPresence(this.successText);
    return this.successText.getText();
  }

  isYesSelected() {
    return this.yesRadio.isSelected();
  }

  isImpressiveSelected() {
    return this.impressiveRadio.isSelected();
  }

  isNoDisabled() {
    return this.noRadio.getAttribute('disabled').then(val => val !== null);
  }
}

export const radioButtonPage = new DemoQARadioButtonPage();
