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

  fillFullName(name: string): void {
    waitHelper.waitForVisible(this.fullNameInput);
    this.fullNameInput.clear();
    this.fullNameInput.sendKeys(name);
  }

  fillEmail(email: string): void {
    waitHelper.waitForVisible(this.emailInput);
    this.emailInput.clear();
    this.emailInput.sendKeys(email);
  }

  fillCurrentAddress(address: string): void {
    waitHelper.waitForVisible(this.currentAddressInput);
    this.currentAddressInput.clear();
    this.currentAddressInput.sendKeys(address);
  }

  fillPermanentAddress(address: string): void {
    waitHelper.waitForVisible(this.permanentAddressInput);
    this.permanentAddressInput.clear();
    this.permanentAddressInput.sendKeys(address);
  }

  fillForm(data: TextBoxFormData): void {
    if (data.fullName) this.fillFullName(data.fullName);
    if (data.email) this.fillEmail(data.email);
    if (data.currentAddress) this.fillCurrentAddress(data.currentAddress);
    if (data.permanentAddress) this.fillPermanentAddress(data.permanentAddress);
  }

  clickSubmit(): void {
    this.scrollAndClick(this.submitButton);
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
