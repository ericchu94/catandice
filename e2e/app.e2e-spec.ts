import { DicePage } from './app.po';

describe('dice App', () => {
  let page: DicePage;

  beforeEach(() => {
    page = new DicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
