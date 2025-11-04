import Base from '../base';
import { Page, Browser } from '@playwright/test';

export default class EditProfilePage extends Base {
  constructor(page: Page, browser: Browser) {
    super(page, browser);
  }

  get editUsernameButton() {
    return this.page.locator('//div[@data-testid="user-info-username"]//button[@data-testid="user-info-edit"]');
  }

  get editUserBioButton() {
    return this.page.locator('//div[@data-testid="user-info-bio"]//button[@data-testid="user-info-edit"]');
  }

  get uploadImageButton() {
    return this.page.locator('//div[@data-testid="upe-image-editor-section"]//button[@data-testid="upe-image-select-uploadBtn"]');
  }

  get usernameField() {
    return this.page.locator('//div[@class="ipc-promptable-base__content"]//input[@name="username-edit"]');
  }

  get userBioField() {
    return this.page.locator('//div[@data-testid="promptable__pc"]//textarea[@id="textarea__0"]');
  }

  get saveChangesButton() {
    return this.page.locator('//div[@class="ipc-promptable-base__content"]//button[@data-testid="prompt-saveButton"]');
  }

  get backButton() {
    return this.page.locator('//div[@data-testid="edit-header"]//a[@data-testid="edit-header-back"]');
  }

  get editUsernameDialog() {
    return this.page.locator('div[role="dialog"]');
  }

  async changeUsername(newUsername: string) {
    await this.page.waitForTimeout(2000);
    await this.editUsernameButton.click();
    await this.editUsernameDialog.waitFor({ state: 'visible' });
    await this.usernameField.click();
    await this.usernameField.fill(newUsername);
    await this.saveChangesButton.click();
  }

  async changeUserBio(newUserBio: string) {
    await this.page.waitForTimeout(2000);
    await this.editUserBioButton.click();
    await this.editUsernameDialog.waitFor({ state: 'visible' });
    await this.userBioField.click();
    await this.userBioField.fill(newUserBio);
    await this.saveChangesButton.click();
  }

  async backToUserProfile() {
    await this.backButton.click();
  }
}
