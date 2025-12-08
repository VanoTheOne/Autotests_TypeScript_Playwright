import Base from './base';
import Header from './header/header';
import { login, password } from '../helpers/env';
import { expect, Page } from '@playwright/test';

export default class LoginPage extends Base {
  public header: Header;

  constructor(page: Page) {
    super(page);

    this.header = new Header(page);
  }

  get signInToExistingAccountButton() {
    return this.page.locator('div[data-testid="sign_in_content_main"] button[data-testid="navigate_to_sign_in_button"]');
  }

  get signInWithIMDbButton() {
    return this.page.locator('div[data-testid="sign_in_content_sign_in"] a[data-testid="sign_in_option_IMDB"]');
  }

  get emailInputField() {
    return this.page.locator('input[type="email"]');
  }

  get passwordInputField() {
    return this.page.locator('input[type="password"]');
  }

  get signInButton() {
    return this.page.locator('#signInSubmit');
  }

  async logInUser(page: Page) {
    await this.navigate('https://www.imdb.com/');
    await this.header.signInButton.click();
    await this.page.waitForTimeout(2000);
    await this.signInToExistingAccountButton.click();
    await this.signInWithIMDbButton.click();
    await this.emailInputField.fill(login);
    await this.passwordInputField.fill(password);
    await this.signInButton.click();
    // await page.pause();
    await expect(page).toHaveTitle(`IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows`);
  }
}
