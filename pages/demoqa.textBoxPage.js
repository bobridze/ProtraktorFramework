'use strict';

var BasePage    = require('./basePage');
var waitHelper  = require('../helpers/waitHelper');

class DemoQATextBoxPage extends BasePage {
  constructor() {
    super('https://demoqa.com/text-box');

    // Form fields
    this.fullNameInput       = element(by.id('userName'));
    this.emailInput          = element(by.id('userEmail'));
    this.currentAddressInput = element(by.id('currentAddress'));
    this.permanentAddressInput = element(by.id('permanentAddress'));
    this.submitButton        = element(by.id('submit'));

    // Page header
    this.textBoxHeader       = element(by.css('h1.text-center, .text-center'));

    // Output area (appears after submit)
    this.outputBox           = element(by.id('output'));
    this.outputName          = element(by.css('#output #name'));
    this.outputEmail         = element(by.css('#output #email'));
    this.outputCurrentAddress  = element(by.css('#output #currentAddress'));
    this.outputPermanentAddress = element(by.css('#output #permanentAddress'));
  }

  fillFullName(name) {
    waitHelper.waitForVisible(this.fullNameInput);
    this.fullNameInput.clear();
    this.fullNameInput.sendKeys(name);
  }

  fillEmail(email) {
    waitHelper.waitForVisible(this.emailInput);
    this.emailInput.clear();
    this.emailInput.sendKeys(email);
  }

  fillCurrentAddress(address) {
    waitHelper.waitForVisible(this.currentAddressInput);
    this.currentAddressInput.clear();
    this.currentAddressInput.sendKeys(address);
  }

  fillPermanentAddress(address) {
    waitHelper.waitForVisible(this.permanentAddressInput);
    this.permanentAddressInput.clear();
    this.permanentAddressInput.sendKeys(address);
  }

  fillForm(data) {
    if (data.fullName) this.fillFullName(data.fullName);
    if (data.email) this.fillEmail(data.email);
    if (data.currentAddress) this.fillCurrentAddress(data.currentAddress);
    if (data.permanentAddress) this.fillPermanentAddress(data.permanentAddress);
  }

  clickSubmit() {
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

module.exports = new DemoQATextBoxPage();
