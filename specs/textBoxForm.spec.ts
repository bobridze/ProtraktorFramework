import { textBoxPage } from '../pages/demoqa.textBoxPage';

describe('Text Box Page Tests', () => {

  beforeEach(async () => {
    await textBoxPage.open();
  });

  // --- Positive Tests ---

  it('[TC-027] should have the correct page title', async () => {
    expect(await textBoxPage.getTitle()).toContain('demosite');
  });

  it('[TC-028] should display "Text Box" as page header', async () => {
    expect(await textBoxPage.textBoxHeader.getText()).toBe('Text Box');
  });

  it('[TC-029] should submit form with all fields and display correct output', async () => {
    await textBoxPage.fillForm({
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      currentAddress: '123 Main Street',
      permanentAddress: '456 Oak Avenue'
    });
    await textBoxPage.clickSubmit();

    expect(await textBoxPage.isOutputDisplayed()).toBe(true);
    expect(await textBoxPage.getOutputName()).toContain('John Doe');
    expect(await textBoxPage.getOutputEmail()).toContain('john.doe@example.com');
    expect(await textBoxPage.getOutputCurrentAddress()).toContain('123 Main Street');
    expect(await textBoxPage.getOutputPermanentAddress()).toContain('456 Oak Avenue');
  });

  it('[TC-030] should submit form with only Full Name and display output', async () => {
    await textBoxPage.fillFullName('Jane Smith');
    await textBoxPage.clickSubmit();

    expect(await textBoxPage.isOutputDisplayed()).toBe(true);
    expect(await textBoxPage.getOutputName()).toContain('Jane Smith');
  });

  it('[TC-031] should submit form with only Email and display output', async () => {
    await textBoxPage.fillEmail('test@domain.com');
    await textBoxPage.clickSubmit();

    expect(await textBoxPage.isOutputDisplayed()).toBe(true);
    expect(await textBoxPage.getOutputEmail()).toContain('test@domain.com');
  });

  it('[TC-032] should submit form with only Current Address and display output', async () => {
    await textBoxPage.fillCurrentAddress('789 Pine Road');
    await textBoxPage.clickSubmit();

    expect(await textBoxPage.isOutputDisplayed()).toBe(true);
    expect(await textBoxPage.getOutputCurrentAddress()).toContain('789 Pine Road');
  });

  it('[TC-033] should submit form with only Permanent Address and display output', async () => {
    await textBoxPage.fillPermanentAddress('101 Elm Boulevard');
    await textBoxPage.clickSubmit();

    expect(await textBoxPage.isOutputDisplayed()).toBe(true);
    expect(await textBoxPage.getOutputPermanentAddress()).toContain('101 Elm Boulevard');
  });

  it('[TC-034] should handle special characters in Full Name', async () => {
    await textBoxPage.fillForm({
      fullName: "O'Brien-Smith Jr.",
      email: 'obrien@example.com'
    });
    await textBoxPage.clickSubmit();

    expect(await textBoxPage.isOutputDisplayed()).toBe(true);
    expect(await textBoxPage.getOutputName()).toContain("O'Brien-Smith Jr.");
  });

  // --- Negative Tests ---

  it('[TC-035] should not display output when submitting empty form', async () => {
    await textBoxPage.clickSubmit();

    expect(await textBoxPage.outputBox.isPresent()).toBe(true);
    expect(await textBoxPage.outputName.isPresent()).toBe(false);
    expect(await textBoxPage.outputEmail.isPresent()).toBe(false);
  });

  it('[TC-036] should reject invalid email format (missing @)', async () => {
    await textBoxPage.fillForm({
      fullName: 'Test User',
      email: 'invalid-email'
    });
    await textBoxPage.clickSubmit();

    expect(await textBoxPage.emailInput.getAttribute('class')).toContain('field-error');
  });

  it('[TC-037] should reject invalid email format (missing domain)', async () => {
    await textBoxPage.fillForm({
      fullName: 'Test User',
      email: 'user@'
    });
    await textBoxPage.clickSubmit();

    expect(await textBoxPage.emailInput.getAttribute('class')).toContain('field-error');
  });

  it('[TC-038] should reject invalid email format (spaces)', async () => {
    await textBoxPage.fillForm({
      fullName: 'Test User',
      email: 'user name@example.com'
    });
    await textBoxPage.clickSubmit();

    expect(await textBoxPage.emailInput.getAttribute('class')).toContain('field-error');
  });

  it('[TC-039] should display correct footer text', async () => {
    expect(await textBoxPage.getFooterText()).toContain('TOOLSQA.COM | ALL RIGHTS RESERVED');
  });

});
