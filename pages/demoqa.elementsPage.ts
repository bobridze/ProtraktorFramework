import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';
import { BasePage } from './basePage';

class DemoQAElementsPage extends BasePage {
  menuItems: ElementArrayFinder;
  textBoxMenuItem: ElementFinder;
  checkBoxMenuItem: ElementFinder;
  radioButtonMenuItem: ElementFinder;
  webTablesMenuItem: ElementFinder;
  buttonsMenuItem: ElementFinder;
  linksMenuItem: ElementFinder;
  brokenLinksMenuItem: ElementFinder;
  uploadDownloadMenuItem: ElementFinder;
  dynamicPropsMenuItem: ElementFinder;

  constructor() {
    super('https://demoqa.com/elements');

    this.menuItems = element.all(by.css('.element-group:first-of-type .element-list .menu-list .btn'));
    this.textBoxMenuItem       = element(by.xpath('//span[normalize-space(text())="Text Box"]/..'));
    this.checkBoxMenuItem      = element(by.xpath('//span[normalize-space(text())="Check Box"]/..'));
    this.radioButtonMenuItem   = element(by.xpath('//span[normalize-space(text())="Radio Button"]/..'));
    this.webTablesMenuItem     = element(by.xpath('//span[normalize-space(text())="Web Tables"]/..'));
    this.buttonsMenuItem       = element(by.xpath('//span[normalize-space(text())="Buttons"]/..'));
    this.linksMenuItem         = element(by.xpath('//span[normalize-space(text())="Links"]/..'));
    this.brokenLinksMenuItem   = element(by.xpath('//span[normalize-space(text())="Broken Links - Images"]/..'));
    this.uploadDownloadMenuItem = element(by.xpath('//span[normalize-space(text())="Upload and Download"]/..'));
    this.dynamicPropsMenuItem  = element(by.xpath('//span[normalize-space(text())="Dynamic Properties"]/..'));
  }

  async clickMenuItem(menuItem: ElementFinder): Promise<void> {
    await this.scrollAndClick(menuItem);
  }

  getMenuItemCount() {
    return this.menuItems.count();
  }
}

export const elementsPage = new DemoQAElementsPage();
