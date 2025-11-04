import { Page, Browser } from '@playwright/test';

export default class Base {
  public page: Page;
  public browser: Browser;

  constructor(page: Page, browser: Browser) {
    this.page = page;
    this.browser = browser;
  }

  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async reloadPage(): Promise<void> {
    await this.page.reload();
  }

  async click(selector: string): Promise<void> {
    await this.page.click(selector);
  }
}
