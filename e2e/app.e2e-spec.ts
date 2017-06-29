import { AngularRecipesCourseProjectPage } from './app.po';

describe('angular-recipes-course-project App', () => {
  let page: AngularRecipesCourseProjectPage;

  beforeEach(() => {
    page = new AngularRecipesCourseProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
