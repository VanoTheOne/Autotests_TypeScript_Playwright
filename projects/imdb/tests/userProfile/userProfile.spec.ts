import { test, expect } from '@playwright/test';
import Base from '../../page-obj/base';
import ProfilePage from '../../page-obj/profile/profilePage';
import EditProfilePage from '../../page-obj/profile/editProfilePage';
import AccountMenu from '../../page-obj/header/accountMenu';

test.describe(`User profile page tests`, function () {
  let base: Base;
  let accountMenu: AccountMenu;
  let profilePage: ProfilePage;
  let editProfilePage: EditProfilePage;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    profilePage = new ProfilePage(page);
    editProfilePage = new EditProfilePage(page);
    accountMenu = new AccountMenu(page);

    await base.navigate(`https://www.imdb.com/`);
  });

  test.describe(`Edit profile page tests`, function () {
    test(`Should check if username is changed`, async ({ page }) => {
      await accountMenu.openUserProfile();
      await profilePage.openEditProfilePage();
      const newUsername = `Ivan-6666`;
      await editProfilePage.changeUsername(newUsername);
      await editProfilePage.backToUserProfile();
      await expect(page).toHaveTitle(`${newUsername}'s Profile - IMDb`);
    });
    test(`Should check if user Bio is changed`, async ({ page }) => {
      await accountMenu.openUserProfile();
      await profilePage.openEditProfilePage();
      const newUserBio = `Playwright1`;
      await editProfilePage.changeUserBio(newUserBio);
      await editProfilePage.backToUserProfile();
      await expect(profilePage.userBio).toHaveText(newUserBio);
    });
    test(`Should check if user profile image is uploaded`, async ({ page }) => {
      await accountMenu.openUserProfile();
      await profilePage.openEditProfilePage();
      await editProfilePage.uploadProfileImage('./projects/imdb/test-data/picture.jpg');
      await expect(editProfilePage.profileImagePreview).toBeVisible();
    });
    test(`Should check if user profile image is deleted`, async ({ page }) => {
      await accountMenu.openUserProfile();
      await profilePage.openEditProfilePage();
      await editProfilePage.deleteProgileImage();
      await expect(editProfilePage.profileImagePreview).not.toBeVisible();
    });
  });
});
