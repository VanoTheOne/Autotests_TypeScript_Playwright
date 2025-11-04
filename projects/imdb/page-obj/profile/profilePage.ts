import Base from '../base';
import { Page, Browser } from '@playwright/test';

export default class ProfilePage extends Base {
  constructor(page: Page, browser: Browser) {
    super(page, browser);
  }

  get editProfileButton() {
    return this.page.locator('//div[@data-testid="up-header"]//a[contains (@class, "ipc-btn ipc-btn--single-padding")]');
  }

  get userBio() {
    return this.page.locator('//div[@data-testid="up-header"]//div[@class="ipc-html-content-inner-div"]');
  }

  get exploreBadgesButton() {
    return this.page.locator('//section[@data-testid="user-badges-feature"]//a[@data-testid="bdg-shoveler-cta"]');
  }

  get settingsButton() {
    return this.page.locator('//div[@data-testid="up-header"]//button[@title="Settings"]');
  }

  async openEditProfilePage() {
    await this.editProfileButton.click();
  }

  async openAccountSettings() {
    await this.settingsButton.click();
    await this.page.pause();
  }
}