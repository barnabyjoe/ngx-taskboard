import { NgxTaskboardPage } from './app.po';

describe('ngx-taskboard App', () => {
  let page: NgxTaskboardPage;

  beforeEach(() => {
    page = new NgxTaskboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
