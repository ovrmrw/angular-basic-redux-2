import { AngularRedux2Page } from './app.po';

describe('angular-redux-2 App', function() {
  let page: AngularRedux2Page;

  beforeEach(() => {
    page = new AngularRedux2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
