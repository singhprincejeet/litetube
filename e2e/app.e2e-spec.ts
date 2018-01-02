import { LitetubePage } from './app.po';

describe('litetube App', () => {
  let page: LitetubePage;

  beforeEach(() => {
    page = new LitetubePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
