import { browser } from 'protractor';
import { webTablesPage } from '../pages/demoqa.webTablesPage';

describe('Web Tables Page Tests', () => {

  beforeEach(() => {
    webTablesPage.open();
  });

  // --- Positive Tests ---

  it('[TC-053] should have the correct page title', () => {
    expect(webTablesPage.getTitle()).toContain('demosite');
  });

  it('[TC-054] should display "Web Tables" as page header', () => {
    expect(webTablesPage.getPageHeaderText()).toBe('Web Tables');
  });

  it('[TC-055] should display correct URL', () => {
    expect(browser.getCurrentUrl()).toContain('https://demoqa.com/webtables');
  });

  it('[TC-056] should display 3 default records in the table', () => {
    expect(webTablesPage.getRowCount()).toBe(3);
  });

  it('[TC-057] should display correct table headers', () => {
    expect(webTablesPage.getHeaderTexts()).toContain('First Name');
    expect(webTablesPage.getHeaderTexts()).toContain('Last Name');
    expect(webTablesPage.getHeaderTexts()).toContain('Age');
    expect(webTablesPage.getHeaderTexts()).toContain('Email');
    expect(webTablesPage.getHeaderTexts()).toContain('Salary');
    expect(webTablesPage.getHeaderTexts()).toContain('Department');
    expect(webTablesPage.getHeaderTexts()).toContain('Action');
  });

  it('[TC-058] should add a new record with all fields', () => {
    webTablesPage.clickAdd();
    webTablesPage.fillForm({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      age: '30',
      salary: '50000',
      department: 'Engineering'
    });
    webTablesPage.clickSubmit();

    expect(webTablesPage.getRowCount()).toBe(4);
  });

  it('[TC-059] should display new record data correctly in the table', () => {
    webTablesPage.clickAdd();
    webTablesPage.fillForm({
      firstName: 'Alice',
      lastName: 'Wonder',
      email: 'alice@example.com',
      age: '25',
      salary: '60000',
      department: 'QA'
    });
    webTablesPage.clickSubmit();
    webTablesPage.waitForFormClosed();

    expect(webTablesPage.getRowCount()).toBe(4);
    expect(webTablesPage.getCellText(3, 0)).toBe('Alice');
    expect(webTablesPage.getCellText(3, 1)).toBe('Wonder');
    expect(webTablesPage.getCellText(3, 2)).toBe('25');
    expect(webTablesPage.getCellText(3, 3)).toBe('alice@example.com');
    expect(webTablesPage.getCellText(3, 4)).toBe('60000');
    expect(webTablesPage.getCellText(3, 5)).toBe('QA');
  });

  it('[TC-060] should search and find existing record by first name', () => {
    webTablesPage.search('Cierra');
    expect(webTablesPage.getRowCount()).toBe(1);
    expect(webTablesPage.getCellText(0, 0)).toBe('Cierra');
  });

  it('[TC-061] should search and find existing record by last name', () => {
    webTablesPage.search('Cantrell');
    expect(webTablesPage.getRowCount()).toBe(1);
    expect(webTablesPage.getCellText(0, 1)).toBe('Cantrell');
  });

  it('[TC-062] should search and find existing record by email', () => {
    webTablesPage.search('kierra@example.com');
    expect(webTablesPage.getRowCount()).toBe(1);
    expect(webTablesPage.getCellText(0, 3)).toBe('kierra@example.com');
  });

  it('[TC-063] should search and find existing record by age', () => {
    webTablesPage.search('39');
    expect(webTablesPage.getRowCount()).toBe(1);
    expect(webTablesPage.getCellText(0, 2)).toBe('39');
  });

  it('[TC-064] should search and find existing record by salary', () => {
    webTablesPage.search('12000');
    expect(webTablesPage.getRowCount()).toBe(1);
    expect(webTablesPage.getCellText(0, 4)).toBe('12000');
  });

  it('[TC-065] should search and find existing record by department', () => {
    webTablesPage.search('Legal');
    expect(webTablesPage.getRowCount()).toBe(1);
    expect(webTablesPage.getCellText(0, 5)).toBe('Legal');
  });

  it('[TC-066] should edit an existing record', () => {
    webTablesPage.search('Cierra');
    webTablesPage.clickEdit(0);
    webTablesPage.fillFirstName('Updated');
    webTablesPage.clickSubmit();

    webTablesPage.clearSearch();
    webTablesPage.search('Updated');
    expect(webTablesPage.getRowCount()).toBe(1);
    expect(webTablesPage.getCellText(0, 0)).toBe('Updated');
  });

  it('[TC-067] should delete an existing record', () => {
    webTablesPage.search('Cierra');
    expect(webTablesPage.getRowCount()).toBe(1);

    webTablesPage.clickDelete(0);
    webTablesPage.clearSearch();
    webTablesPage.search('Cierra');
    expect(webTablesPage.getRowCount()).toBe(0);
  });

  it('[TC-068] should clear search and show all records', () => {
    const initialCount = webTablesPage.getRowCount();
    webTablesPage.search('Cierra');
    expect(webTablesPage.getRowCount()).toBe(1);

    webTablesPage.clearSearch();
    expect(webTablesPage.getRowCount()).toEqual(initialCount);
  });

  it('[TC-069] should open registration form when clicking Add', () => {
    webTablesPage.clickAdd();
    expect(webTablesPage.isFormDisplayed()).toBe(true);
  });

  it('[TC-070] should display correct footer text', () => {
    expect(webTablesPage.getFooterText()).toContain('TOOLSQA.COM | ALL RIGHTS RESERVED');
  });

  // --- Negative Tests ---

  it('[TC-071] should return no results for non-existing search term', () => {
    webTablesPage.search('NonExistentName12345');
    expect(webTablesPage.getRowCount()).toBe(0);
  });

  it('[TC-072] should not close form when submitting with empty required fields', () => {
    webTablesPage.clickAdd();
    webTablesPage.clickSubmit();

    expect(webTablesPage.isFormDisplayed()).toBe(true);
  });

  it('[TC-073] should not add record when first name is missing', () => {
    webTablesPage.clickAdd();
    webTablesPage.fillForm({
      lastName: 'Doe',
      email: 'test@example.com',
      age: '30',
      salary: '50000',
      department: 'IT'
    });
    webTablesPage.clickSubmit();

    expect(webTablesPage.isFormDisplayed()).toBe(true);
  });

  it('[TC-074] should not add record when last name is missing', () => {
    webTablesPage.clickAdd();
    webTablesPage.fillForm({
      firstName: 'John',
      email: 'test@example.com',
      age: '30',
      salary: '50000',
      department: 'IT'
    });
    webTablesPage.clickSubmit();

    expect(webTablesPage.isFormDisplayed()).toBe(true);
  });

  it('[TC-075] should not add record when email is missing', () => {
    webTablesPage.clickAdd();
    webTablesPage.fillForm({
      firstName: 'John',
      lastName: 'Doe',
      age: '30',
      salary: '50000',
      department: 'IT'
    });
    webTablesPage.clickSubmit();

    expect(webTablesPage.isFormDisplayed()).toBe(true);
  });

  it('[TC-076] should not add record when age is missing', () => {
    webTablesPage.clickAdd();
    webTablesPage.fillForm({
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      salary: '50000',
      department: 'IT'
    });
    webTablesPage.clickSubmit();

    expect(webTablesPage.isFormDisplayed()).toBe(true);
  });

  it('[TC-077] should not add record when salary is missing', () => {
    webTablesPage.clickAdd();
    webTablesPage.fillForm({
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      age: '30',
      department: 'IT'
    });
    webTablesPage.clickSubmit();

    expect(webTablesPage.isFormDisplayed()).toBe(true);
  });

  it('[TC-078] should not add record when department is missing', () => {
    webTablesPage.clickAdd();
    webTablesPage.fillForm({
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      age: '30',
      salary: '50000'
    });
    webTablesPage.clickSubmit();

    expect(webTablesPage.isFormDisplayed()).toBe(true);
  });

  it('[TC-079] should not add record with invalid email format', () => {
    webTablesPage.clickAdd();
    webTablesPage.fillForm({
      firstName: 'John',
      lastName: 'Doe',
      email: 'invalid-email',
      age: '30',
      salary: '50000',
      department: 'IT'
    });
    webTablesPage.clickSubmit();

    expect(webTablesPage.isFormDisplayed()).toBe(true);
  });

  it('[TC-080] should not add record with non-numeric age', () => {
    webTablesPage.clickAdd();
    webTablesPage.fillForm({
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      age: 'abc',
      salary: '50000',
      department: 'IT'
    });
    webTablesPage.clickSubmit();

    expect(webTablesPage.isFormDisplayed()).toBe(true);
  });

  it('[TC-081] should not add record with non-numeric salary', () => {
    webTablesPage.clickAdd();
    webTablesPage.fillForm({
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      age: '30',
      salary: 'abc',
      department: 'IT'
    });
    webTablesPage.clickSubmit();

    expect(webTablesPage.isFormDisplayed()).toBe(true);
  });

});
