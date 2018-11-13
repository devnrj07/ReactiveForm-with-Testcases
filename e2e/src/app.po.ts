import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getParagraphText1() {
    return element(by.css('app-root h2')).getText();
  }

  getParagraphText2() {
    return element(by.css('app-rlogin div p')).getText();
  }

  getData(){
    return element(by.className('app-root myclass')).getText();
  }
}
