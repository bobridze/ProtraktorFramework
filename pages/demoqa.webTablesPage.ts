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

  clickAdd(): void {
    waitHelper.waitForClickable(this.addButton);
    this.addButton.click();
  }

  search(text: string): void {
    waitHelper.waitForVisible(this.searchBox);
    this.searchBox.clear();
    this.searchBox.sendKeys(text);
  }

  clearSearch(): void {
    this.searchBox.clear();
    this.searchBox.sendKeys(' ', protractor.Key.BACK_SPACE);
  }

  fillFirstName(value: string): void {
    waitHelper.waitForVisible(this.firstNameInput);
    this.firstNameInput.clear();
    this.firstNameInput.sendKeys(value);
  }

  fillLastName(value: string): void {
    waitHelper.waitForVisible(this.lastNameInput);
    this.lastNameInput.clear();
    this.lastNameInput.sendKeys(value);
  }

  fillEmail(value: string): void {
    this.emailInput.clear();
    this.emailInput.sendKeys(value);
  }

  fillAge(value: string): void {
    this.ageInput.clear();
    this.ageInput.sendKeys(value);
  }

  fillSalary(value: string): void {
    this.salaryInput.clear();
    this.salaryInput.sendKeys(value);
  }

  fillDepartment(value: string): void {
    this.departmentInput.clear();
    this.departmentInput.sendKeys(value);
  }

  fillForm(data: RegistrationFormData): void {
    if (data.firstName) this.fillFirstName(data.firstName);
    if (data.lastName) this.fillLastName(data.lastName);
    if (data.email) this.fillEmail(data.email);
    if (data.age) this.fillAge(data.age);
    if (data.salary) this.fillSalary(data.salary);
    if (data.department) this.fillDepartment(data.department);
  }

  clickSubmit(): void {
    this.scrollAndClick(this.submitButton);
  }

  waitForFormClosed(): void {
    browser.wait(
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

  clickEdit(rowIndex: number): void {
    const editBtn = this.tableRows.get(rowIndex).element(by.css('span[title="Edit"]'));
    this.scrollAndClick(editBtn);
  }

  clickDelete(rowIndex: number): void {
    const deleteBtn = this.tableRows.get(rowIndex).element(by.css('span[title="Delete"]'));
    this.scrollAndClick(deleteBtn);
  }

  getHeaderTexts() {
    return this.tableHeaders.map(header => header.getText());
  }

  isFormDisplayed() {
    return this.registrationForm.isPresent();
  }
}

export const webTablesPage = new DemoQAWebTablesPage();
