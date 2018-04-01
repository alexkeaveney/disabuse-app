import { DisabuseAppPage } from './app.po';

describe('disabuse-app App', function() {
  let page: DisabuseAppPage;

  beforeEach(() => {
    page = new DisabuseAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
