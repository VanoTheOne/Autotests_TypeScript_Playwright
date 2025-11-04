import Base from '../base';
import { Page, Browser } from '@playwright/test';

export default class Header extends Base {
  constructor(page: Page, browser: Browser) {
    super(page, browser);
  }

  get signInButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//a[@class="ipc-btn ipc-btn--single-padding ipc-btn--center-align-content ipc-btn--default-height ipc-btn--core-baseAlt ipc-btn--theme-baseAlt ipc-btn--button-radius imdb-header__signin-text"]');
  }

  get watchlistButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//div[@class="sc-196567ac-0 fClFUt imdb-header__watchlist-button"]/a');
  }

  get searchInput() {
    return this.page.locator('//div[@id="suggestion-search-container"]//input[@type="text"]');
  }

  get searchButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//button[@id="suggestion-search-button"]');
  }

  get searchResult() {
    return this.page.locator('//div[@class="sc-bf2a2581-2 gfiyUT"]//a[@class="ipc-metadata-list-summary-item__t"]').first();
  }

  get searchFilterContainer() {
    return this.page.locator('//div[@id="suggestion-search-container"]//label[@data-testid="category-selector-button"]');
  }

  get searchFilterTitles() {
    return this.page.locator('//form[@id="nav-search-form"]//div[@class="sc-da2a787a-1 dbwWEz"]//span[contains (text(), "Titles")]');
  }

  get menuButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//label[@id="imdbHeader-navDrawerOpen"]');
  }

  get closeMenuButton() {
    return this.page.locator('//div[@class="drawer__panelHeader"]//label[@for="imdbHeader-navDrawer"]');
  }

  async openWatchlist() {
    await this.watchlistButton.click();
  }

  async searchMovie(movieTitle: string) {
    await this.searchInput.click();
    await this.searchInput.fill(movieTitle);
    await this.searchButton.click();
  }

  async openSearchFilter() {
    await this.searchFilterContainer.click();
  }

  async openMenu() {
    await this.menuButton.click();
  }

  async closeMenu() {
    await this.closeMenuButton.click();
  }
}
