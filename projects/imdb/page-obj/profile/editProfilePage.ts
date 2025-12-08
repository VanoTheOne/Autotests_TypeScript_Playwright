import Base from '../base';
import { Page } from '@playwright/test';

export default class EditProfilePage extends Base {
  constructor(page: Page) {
    super(page);
  }

  get editUsernameButton() {
    return this.page.locator('[data-testid="user-info-username"] [data-testid="user-info-edit"]');
  }

  get editUserBioButton() {
    return this.page.locator('[data-testid="user-info-bio"] [data-testid="user-info-edit"]');
  }

  get uploadImageButton() {
    return this.page.locator('[data-testid="upe-image-select-fileInput"]');
  }

  get deleteImageButton() {
    return this.page.locator('[data-testid="upe-image-delete"]');
  }

  get usernameInputField() {
    return this.page.locator('#text-input__0');
  }

  get userBioInputField() {
    return this.page.locator('#textarea__0');
  }

  get profileImagePreview() {
    return this.page.locator('[data-testid="user-info-container"] .ipc-image');
  }

  get saveChangesButton() {
    return this.page.locator('[data-testid="prompt-saveButton"]');
  }

  get saveProfileImageButton() {
    return this.page.locator('[data-testid="upe-image-upload-prompt-save"]');
  }

  get backButton() {
    return this.page.locator('[data-testid="edit-header"] [data-testid="edit-header-back"]');
  }

  get editUsernameDialog() {
    return this.page.locator('[role="dialog"]');
  }

  async changeUsername(newUsername: string) {
    await this.page.waitForTimeout(2000);
    // await this.editUsernameButton.waitForElementState({ state: 'enabled' });
    await this.editUsernameButton.click();
    // await this.editUsernameDialog.waitFor({ state: 'visible' });
    await this.usernameInputField.click();
    await this.usernameInputField.fill(newUsername);
    await this.saveChangesButton.click();
  }

  async changeUserBio(newUserBio: string) {
    await this.page.waitForTimeout(2000);
    await this.editUserBioButton.click();
    await this.editUsernameDialog.waitFor({ state: 'visible' });
    await this.userBioInputField.click();
    await this.userBioInputField.fill(newUserBio);
    await this.saveChangesButton.click();
  }

  async backToUserProfile() {
    await this.backButton.click();
  }

  async uploadProfileImage(imagePath: string) {
    await this.page.waitForTimeout(2000);
    await this.uploadImageButton.setInputFiles(imagePath);
    await this.saveProfileImageButton.click();
    await this.page.waitForTimeout(5000);
  }

  async deleteProgileImage() {
    await this.page.waitForTimeout(2000);
    await this.deleteImageButton.click();
    await this.saveChangesButton.click();
  }
}
