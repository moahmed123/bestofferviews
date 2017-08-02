import { browser, by, element } from 'protractor';

export class LowestPriceViewsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
