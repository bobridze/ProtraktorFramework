import { element, by, ElementFinder } from 'protractor';
import { BasePage } from './basePage';
import { waitHelper } from '../helpers/waitHelper';

interface TextBoxFormData {
  fullName?: string;
  email?: string;
  currentAddress?: string;
  permanentAddress?: string;
}

class DemoQATextBoxPage extends BasePage {
  fullNameInput: ElementFinder;
  emailInput: ElementFinder;
  currentAddressInput: ElementFinder;
  permanentAddressInput: ElementFinder;
  submitButton: ElementFinder;
  textBoxHeader: ElementFinder;
  outputBox: ElementFinder;
  outputName: ElementFinder;
  outputEmail: ElementFinder;
  outputCurrentAddress: ElementFinder;
  outputPermanentAddress: ElementFinder;

  constructor() {
    super('https://demoqa.com/text-box');

    this.fullNameInput       = element(by.id('userName'));
    this.emailInput          = element(by.id('userEmail'));
    this.currentAddressInput = element(by.id('currentAddress'));
    this.permanentAddressInput = element(by.id('permanentAddress'));
    this.submitButton        = element(by.id('submit'));
    this.textBoxHeader       = element(by.css('h1.text-center, .text-center'));
    this.outputBox           = element(by.id('output'));
    this.outputName          = element(by.css('#output #name'));
    this.outputEmail         = element(by.css('#output #email'));
    this.outputCurrentAddress  = element(by.css('#output #currentAddress'));
    this.outputPermanentAddress = element(by.css('#output #permanentAddress'));
  }

  async fillFullName(name: string): Promise<void> {
    waitHelper.waitForVisible(this.fullNameInput);
    await this.fullNameInput.clear();
    await this.fullNameInput.sendKeys(name);
  }

  async fillEmail(email: string): Promise<void> {
    waitHelper.waitForVisible(this.emailInput);
    await this.emailInput.clear();
    await this.emailInput.sendKeys(email);
  }

  async fillCurrentAddress(address: string): Promise<void> {
    waitHelper.waitForVisible(this.currentAddressInput);
    await this.currentAddressInput.clear();
    await this.currentAddressInput.sendKeys(address);
  }

  async fillPermanentAddress(address: string): Promise<void> {
    waitHelper.waitForVisible(this.permanentAddressInput);
    await this.permanentAddressInput.clear();
    await this.permanentAddressInput.sendKeys(address);
  }

  async fillForm(data: TextBoxFormData): Promise<void> {
    if (data.fullName) await this.fillFullName(data.fullName);
    if (data.email) await this.fillEmail(data.email);
    if (data.currentAddress) await this.fillCurrentAddress(data.currentAddress);
    if (data.permanentAddress) await this.fillPermanentAddress(data.permanentAddress);
  }

  async clickSubmit(): Promise<void> {
    await this.scrollAndClick(this.submitButton);
  }

  getOutputName() {
    return this.outputName.getText();
  }

  getOutputEmail() {
    return this.outputEmail.getText();
  }

  getOutputCurrentAddress() {
    return this.outputCurrentAddress.getText();
  }

  getOutputPermanentAddress() {
    return this.outputPermanentAddress.getText();
  }

  isOutputDisplayed() {
    return this.outputBox.isDisplayed();
  }
}

export const textBoxPage = new DemoQATextBoxPage();
