import { DynamiccomponentsPage } from './app.po';

describe('dynamiccomponents App', () => {
  let page: DynamiccomponentsPage;

  beforeEach(() => {
    page = new DynamiccomponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
