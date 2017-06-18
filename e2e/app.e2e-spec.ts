import { JazzPage } from './app.po';

describe('jazz App', () => {
  let page: JazzPage;

  beforeEach(() => {
    page = new JazzPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
