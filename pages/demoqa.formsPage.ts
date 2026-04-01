import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';
import { BasePage } from './basePage';

class DemoQAFormsPage extends BasePage {
  menuItems: ElementArrayFinder;
  practiceFormMenuItem: ElementFinder;

  constructor() {
    super('https://demoqa.com/forms');

    this.menuItems            = element.all(by.css('.element-group:nth-of-type(2) .element-list .menu-list .btn'));
    this.practiceFormMenuItem = element(by.xpath('//span[normalize-space(text())="Practice Form"]/..'));
  }

  clickMenuItem(menuItem: ElementFinder): void {
    this.scrollAndClick(menuItem);
  }

  getMenuItemCount() {
    return this.menuItems.count();
  }
}

export const formsPage = new DemoQAFormsPage();
