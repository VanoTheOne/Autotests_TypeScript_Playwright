import Base from '../base';
import { Page } from '@playwright/test';

export default class ProfilePage extends Base {
  constructor(page: Page) {
    super(page);
  }

  get editProfileButton() {
    return this.page.locator('[data-testid="up-header"] a');
  }

  get userBio() {
    return this.page.locator('[data-testid="up-header"] div.ipc-html-content-inner-div');
  }

  get exploreBadgesButton() {
    return this.page.locator('[data-testid="user-badges-feature"] [data-testid="bdg-shoveler-cta"]');
  }

  get settingsButton() {
    return this.page.locator('[data-testid="up-header"] [title="Settings"]');
  }

  async openEditProfilePage() {
    await this.editProfileButton.click();
  }

  async openAccountSettings() {
    await this.settingsButton.click();
    await this.page.pause();
  }
}
