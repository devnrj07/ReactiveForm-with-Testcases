import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ReactiveForm!');
  });

   it('H2',()=>{
     page.navigateTo();
     expect(page.getParagraphText1()).toContain("testing h2");
   });

   it('Div',()=>{
    page.navigateTo();
    expect(page.getParagraphText2()).toContain("testing div");
  })

  it('what',()=>{
    page.navigateTo();
    expect(page.getData()).toContain("testing by classname");
  })

});
