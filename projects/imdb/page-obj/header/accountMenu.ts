import Base from '../base';
import { Page, Browser } from '@playwright/test';

export default class AccountMenu extends Base {
  constructor(page: Page, browser: Browser) {
    super(page, browser);
  }

  get accountMenuButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//div[contains (@class, "navbar__flyout--breakpoint-m")]//label[contains (@class, "navbar__user-menu-toggle__button")]');
  }

  get accountMenuYourProfileButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Your profile")]/..');
  }

  get accountMenuYourWatchlistButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Your Watchlist")]/..');
  }

  get accountMenuYourRatingsButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Your ratings")]/..');
  }

  get accountMenuYourListsButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Your lists")]/..');
  }

  get accountMenuYourInterestsButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Your interests")]/..');
  }

  get accountMenuYourWatchHistoryButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Your watch history")]/..');
  }

  get accountMenuAccountSettingsButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Account settings")]/..');
  }

  get accountMenuSignOutButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Sign out")]/..');
  }

  async openUserProfile() {
    await this.accountMenuButton.click();
    await this.accountMenuYourProfileButton.click();
  }

  async openUserWatchlist() {
    await this.accountMenuButton.click();
    await this.accountMenuYourWatchlistButton.click();
  }

  async openUserRatings() {
    await this.accountMenuButton.click();
    await this.accountMenuYourRatingsButton.click();
  }

  async openUserLists() {
    await this.accountMenuButton.click();
    await this.accountMenuYourListsButton.click();
  }

  async openUserInterests() {
    await this.accountMenuButton.click();
    await this.accountMenuYourInterestsButton.click();
  }

  async openUserWatchHistory() {
    await this.accountMenuButton.click();
    await this.accountMenuYourWatchHistoryButton.click();
  }

  async openUserAccountSettings() {
    await this.accountMenuButton.click();
    await this.accountMenuAccountSettingsButton.click();
  }

  async signOut() {
    await this.accountMenuButton.click();
    await this.accountMenuSignOutButton.click();
  }
}
