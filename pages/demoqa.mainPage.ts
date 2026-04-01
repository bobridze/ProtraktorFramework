import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';
import { BasePage } from './basePage';

class DemoQAMainPage extends BasePage {
  headerImage: ElementFinder;
  seleniumTrainingLink: ElementFinder;
  joinNowButton: ElementFinder;
  categoryCards: ElementArrayFinder;

  constructor() {
    super('https://demoqa.com/');

    this.headerImage = element(by.css('header img'));
    this.seleniumTrainingLink = element(by.css('a[href="https://www.toolsqa.com/selenium-training/"]'));
    this.joinNowButton = element(by.cssContainingText('.banner-btn, a, button', 'Join Now'));
    this.categoryCards = element.all(by.css('.card'));
  }

  clickJoinNow(): void {
    this.scrollAndClick(this.seleniumTrainingLink);
  }

  clickCategoryCard(cardName: string): void {
    const card = element(by.xpath(`//a[.//h5[normalize-space(text())="${cardName}"]]`));
    this.scrollAndClick(card);
  }

  getCategoryCardCount() {
    return this.categoryCards.count();
  }
}

export const mainPage = new DemoQAMainPage();
