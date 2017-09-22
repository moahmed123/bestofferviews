import { LowestPriceViewsPage } from './app.po';

describe('lowest-price-views App', () => {
  let page: LowestPriceViewsPage;

  beforeEach(() => {
    page = new LowestPriceViewsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
