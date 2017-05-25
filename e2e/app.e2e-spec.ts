import { PersonListCordovaPage } from './app.po';

describe('person-list-cordova App', () => {
  let page: PersonListCordovaPage;

  beforeEach(() => {
    page = new PersonListCordovaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
