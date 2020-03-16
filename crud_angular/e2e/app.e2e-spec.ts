import { CrudLoginPage } from './app.po';

describe('crud-login App', () => {
  let page: CrudLoginPage;

  beforeEach(() => {
    page = new CrudLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
