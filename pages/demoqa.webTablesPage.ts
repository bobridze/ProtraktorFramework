import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';
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
    this.tableRows    = element.all(by.css('.rt-tbody .rt-tr-group'));
    this.tableHeaders = element.all(by.css('.rt-thead .rt-th'));

    // Registration form modal
    this.registrationForm = element(by.id('registration-form-modal'));
    this.firstNameInput   = element(by.id('firstName'));
    this.lastNameInput    = element(by.id('lastName'));
    this.emailInput       = element(by.id('userEmail'));
    this.ageInput         = element(by.id('age'));
    this.salaryInput      = element(by.id('salary'));
    this.departmentInput  = element(by.id('department'));
    this.submitButton     = element(by.id('submit'));

    // Pagination
    this.previousButton = element(by.css('.-previous button'));
    this.nextButton     = element(by.css('.-next button'));
    this.pageInput      = element(by.css('.-pageInfo .-pageJump input'));
    this.pageSizeSelect = element(by.css('.-pageSizeOptions select'));
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

  getRowCount() {
    return element.all(by.css('.rt-tbody .rt-tr-group .rt-td:first-child')).filter(
      cell => cell.getText().then(text => text.trim() !== '')
    ).count();
  }

  getRowText(rowIndex: number) {
    return this.tableRows.get(rowIndex).getText();
  }

  getCellText(rowIndex: number, colIndex: number) {
    return this.tableRows.get(rowIndex).all(by.css('.rt-td')).get(colIndex).getText();
  }

  clickEdit(rowIndex: number): void {
    const editBtn = this.tableRows.get(rowIndex).element(by.css('[title="Edit"]'));
    this.scrollAndClick(editBtn);
  }

  clickDelete(rowIndex: number): void {
    const deleteBtn = this.tableRows.get(rowIndex).element(by.css('[title="Delete"]'));
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
