import { chromium } from '@playwright/test';
import LoginPage from '../page-obj/loginPage';

async function globalSetup(): Promise<void> {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  const loginPage = new LoginPage(page, browser);

  console.log('Starting login');
  await loginPage.logInUser(page);
  console.log('Login successful');

  console.log('Saving storage state...');
  await page.context().storageState({ path: './LoginAuth.json' });
  console.log('Data saved');

  await browser.close();
}

export default globalSetup;