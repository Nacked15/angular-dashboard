import { McanoPage } from './app.po';

describe('mcano App', () => {
  let page: McanoPage;

  beforeEach(() => {
    page = new McanoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
