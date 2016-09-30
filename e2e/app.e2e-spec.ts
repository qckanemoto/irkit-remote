import { IRKitxPage } from './app.po';

describe('irkitx App', function() {
  let page: IRKitxPage;

  beforeEach(() => {
    page = new IRKitxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
