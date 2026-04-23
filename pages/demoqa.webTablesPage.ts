import { browser, element, by, ElementFinder, ElementArrayFinder, protractor } from 'protractor';
import { BasePage } from './basePage';
import { waitHelper } from '../helpers/waitHelper';

interface RegistrationFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  age?: string;
  salary?: string;
  department?: string;
}

class DemoQAWebTablesPage extends BasePage {
  addButton: ElementFinder;
  searchBox: ElementFinder;
  tableRows: ElementArrayFinder;
  tableHeaders: ElementArrayFinder;

  // Registration form
  registrationForm: ElementFinder;
  firstNameInput: ElementFinder;
  lastNameInput: ElementFinder;
  emailInput: ElementFinder;
  ageInput: ElementFinder;
  salaryInput: ElementFinder;
  departmentInput: ElementFinder;
  submitButton: ElementFinder;

  // Pagination
  previousButton: ElementFinder;
  nextButton: ElementFinder;
  pageInput: ElementFinder;
  pageSizeSelect: ElementFinder;

  constructor() {
    super('https://demoqa.com/webtables');

    this.addButton    = element(by.id('addNewRecordButton'));
    this.searchBox    = element(by.id('searchBox'));
    this.tableRows    = element.all(by.css('table tbody tr'));
    this.tableHeaders = element.all(by.css('table thead th'));

    // Registration form modal
    this.registrationForm = element(by.css('.modal.show'));
    this.firstNameInput   = element(by.id('firstName'));
    this.lastNameInput    = element(by.id('lastName'));
    this.emailInput       = element(by.id('userEmail'));
    this.ageInput         = element(by.id('age'));
    this.salaryInput      = element(by.id('salary'));
    this.departmentInput  = element(by.id('department'));
    this.submitButton     = element(by.id('submit'));

    // Pagination
    this.previousButton = element(by.xpath('//button[text()="Previous"]'));
    this.nextButton     = element(by.xpath('//button[text()="Next"]'));
    this.pageInput      = element(by.css('.pagination input'));
    this.pageSizeSelect = element(by.css('select'));
  }

  async clickAdd(): Promise<void> {
    waitHelper.waitForClickable(this.addButton);
    await this.addButton.click();
  }

  async search(text: string): Promise<void> {
    waitHelper.waitForVisible(this.searchBox);
    await this.searchBox.clear();
    await this.searchBox.sendKeys(text);
  }

  async clearSearch(): Promise<void> {
    await this.searchBox.clear();
    await this.searchBox.sendKeys(' ', protractor.Key.BACK_SPACE);
  }

  async fillFirstName(value: string): Promise<void> {
    waitHelper.waitForVisible(this.firstNameInput);
    await this.firstNameInput.clear();
    await this.firstNameInput.sendKeys(value);
  }

  async fillLastName(value: string): Promise<void> {
    waitHelper.waitForVisible(this.lastNameInput);
    await this.lastNameInput.clear();
    await this.lastNameInput.sendKeys(value);
  }

  async fillEmail(value: string): Promise<void> {
    await this.emailInput.clear();
    await this.emailInput.sendKeys(value);
  }

  async fillAge(value: string): Promise<void> {
    await this.ageInput.clear();
    await this.ageInput.sendKeys(value);
  }

  async fillSalary(value: string): Promise<void> {
    await this.salaryInput.clear();
    await this.salaryInput.sendKeys(value);
  }

  async fillDepartment(value: string): Promise<void> {
    await this.departmentInput.clear();
    await this.departmentInput.sendKeys(value);
  }

  async fillForm(data: RegistrationFormData): Promise<void> {
    if (data.firstName) await this.fillFirstName(data.firstName);
    if (data.lastName) await this.fillLastName(data.lastName);
    if (data.email) await this.fillEmail(data.email);
    if (data.age) await this.fillAge(data.age);
    if (data.salary) await this.fillSalary(data.salary);
    if (data.department) await this.fillDepartment(data.department);
  }

  async clickSubmit(): Promise<void> {
    await this.scrollAndClick(this.submitButton);
  }

  async waitForFormClosed(): Promise<void> {
    await browser.wait(
      protractor.ExpectedConditions.invisibilityOf(this.registrationForm),
      5000,
      'Timed out waiting for registration form to close'
    );
  }

  getRowCount() {
    return this.tableRows.count();
  }

  getRowText(rowIndex: number) {
    return this.tableRows.get(rowIndex).getText();
  }

  getCellText(rowIndex: number, colIndex: number) {
    return this.tableRows.get(rowIndex).all(by.css('td')).get(colIndex).getText();
  }

  async clickEdit(rowIndex: number): Promise<void> {
    const editBtn = this.tableRows.get(rowIndex).element(by.css('span[title="Edit"]'));
    await this.scrollAndClick(editBtn);
  }

  async clickDelete(rowIndex: number): Promise<void> {
    const deleteBtn = this.tableRows.get(rowIndex).element(by.css('span[title="Delete"]'));
    await this.scrollAndClick(deleteBtn);
  }

  getHeaderTexts() {
    return this.tableHeaders.map(header => header.getText());
  }

  isFormDisplayed() {
    return this.registrationForm.isPresent();
  }
}

export const webTablesPage = new DemoQAWebTablesPage();
