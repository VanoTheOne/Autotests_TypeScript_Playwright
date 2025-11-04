import { test, expect } from '@playwright/test';
import Base from '../../page-obj/base';
import Header from '../../page-obj/header/header';
import AccountMenu from '../../page-obj/header/accountMenu';

test.describe(`Header tests`, function () {
  let base: Base;
  let header: Header;
  let accountMenu: AccountMenu;

  test.beforeEach(async ({ page, browser }) => {
    base = new Base(page, browser);
    header = new Header(page, browser);
    accountMenu = new AccountMenu(page, browser);

    await base.navigate(`https://www.imdb.com/`);
  });

  test.describe(`Header smoke tests`, function () {
    test(`Should check the transition to the user's watchlist page`, async ({ page }) => {
      await header.openWatchlist();
      await expect(page).toHaveTitle(`Your Watchlist`);
    });
    test(`Should check the needed movie is founded`, async ({ page }) => {
      const movieTitle = `Blade Runner`;
      await header.searchMovie(movieTitle);
      await expect(await header.searchResult).toContainText(movieTitle);
    });
    test(`Should check if search filter is applyed`, async ({ page }) => {
      await header.openSearchFilter();
      await header.searchFilterTitles.click();
      await expect(await header.searchFilterContainer).toHaveText(`Titles`);
    });
    test(`Should check if menu opens and closes`, async ({ page }) => {
      await header.openMenu();
      await header.closeMenu();
      await expect(await header.searchInput).toBeVisible();
    });
  });
});
