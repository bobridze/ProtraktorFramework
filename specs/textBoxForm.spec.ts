import { textBoxPage } from '../pages/demoqa.textBoxPage';

describe('Text Box Page Tests', () => {

  beforeEach(() => {
    textBoxPage.open();
  });

  // --- Positive Tests ---

  it('[TC-027] should have the correct page title', () => {
    expect(textBoxPage.getTitle()).toContain('demosite');
  });

  it('[TC-028] should display "Text Box" as page header', () => {
    expect(textBoxPage.textBoxHeader.getText()).toBe('Text Box');
  });

  it('[TC-029] should submit form with all fields and display correct output', () => {
    textBoxPage.fillForm({
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      currentAddress: '123 Main Street',
      permanentAddress: '456 Oak Avenue'
    });
    textBoxPage.clickSubmit();

    expect(textBoxPage.isOutputDisplayed()).toBe(true);
    expect(textBoxPage.getOutputName()).toContain('John Doe');
    expect(textBoxPage.getOutputEmail()).toContain('john.doe@example.com');
    expect(textBoxPage.getOutputCurrentAddress()).toContain('123 Main Street');
    expect(textBoxPage.getOutputPermanentAddress()).toContain('456 Oak Avenue');
  });

  it('[TC-030] should submit form with only Full Name and display output', () => {
    textBoxPage.fillFullName('Jane Smith');
    textBoxPage.clickSubmit();

    expect(textBoxPage.isOutputDisplayed()).toBe(true);
    expect(textBoxPage.getOutputName()).toContain('Jane Smith');
  });

  it('[TC-031] should submit form with only Email and display output', () => {
    textBoxPage.fillEmail('test@domain.com');
    textBoxPage.clickSubmit();

    expect(textBoxPage.isOutputDisplayed()).toBe(true);
    expect(textBoxPage.getOutputEmail()).toContain('test@domain.com');
  });

  it('[TC-032] should submit form with only Current Address and display output', () => {
    textBoxPage.fillCurrentAddress('789 Pine Road');
    textBoxPage.clickSubmit();

    expect(textBoxPage.isOutputDisplayed()).toBe(true);
    expect(textBoxPage.getOutputCurrentAddress()).toContain('789 Pine Road');
  });

  it('[TC-033] should submit form with only Permanent Address and display output', () => {
    textBoxPage.fillPermanentAddress('101 Elm Boulevard');
    textBoxPage.clickSubmit();

    expect(textBoxPage.isOutputDisplayed()).toBe(true);
    expect(textBoxPage.getOutputPermanentAddress()).toContain('101 Elm Boulevard');
  });

  it('[TC-034] should handle special characters in Full Name', () => {
    textBoxPage.fillForm({
      fullName: "O'Brien-Smith Jr.",
      email: 'obrien@example.com'
    });
    textBoxPage.clickSubmit();

    expect(textBoxPage.isOutputDisplayed()).toBe(true);
    expect(textBoxPage.getOutputName()).toContain("O'Brien-Smith Jr.");
  });

  // --- Negative Tests ---

  it('[TC-035] should not display output when submitting empty form', () => {
    textBoxPage.clickSubmit();

    expect(textBoxPage.outputBox.isPresent()).toBe(true);
    expect(textBoxPage.outputName.isPresent()).toBe(false);
    expect(textBoxPage.outputEmail.isPresent()).toBe(false);
  });

  it('[TC-036] should reject invalid email format (missing @)', () => {
    textBoxPage.fillForm({
      fullName: 'Test User',
      email: 'invalid-email'
    });
    textBoxPage.clickSubmit();

    expect(textBoxPage.emailInput.getAttribute('class')).toContain('field-error');
  });

  it('[TC-037] should reject invalid email format (missing domain)', () => {
    textBoxPage.fillForm({
      fullName: 'Test User',
      email: 'user@'
    });
    textBoxPage.clickSubmit();

    expect(textBoxPage.emailInput.getAttribute('class')).toContain('field-error');
  });

  it('[TC-038] should reject invalid email format (spaces)', () => {
    textBoxPage.fillForm({
      fullName: 'Test User',
      email: 'user name@example.com'
    });
    textBoxPage.clickSubmit();

    expect(textBoxPage.emailInput.getAttribute('class')).toContain('field-error');
  });

  it('[TC-039] should display correct footer text', () => {
    expect(textBoxPage.getFooterText()).toContain('TOOLSQA.COM | ALL RIGHTS RESERVED');
  });

});
