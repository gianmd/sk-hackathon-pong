import { CliUpgradeProjectPage } from './app.po';

describe('cli-upgrade-project App', () => {
  let page: CliUpgradeProjectPage;

  beforeEach(() => {
    page = new CliUpgradeProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
