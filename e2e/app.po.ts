import { browser, by, element } from 'protractor';

export class McanoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mcano h1')).getText();
  }
}
