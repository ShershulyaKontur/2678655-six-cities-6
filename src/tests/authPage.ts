import { Locator, Page } from '@playwright/test';

export class AuthPage {
  private readonly url: string;
  private readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page, url = 'http://localhost:5173/login') {
    this.url = url;

    this.page = page;
    this.usernameInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  public async load(): Promise<void> {
    await this.page.goto(this.url);
  }
  async login(user: string, pass: string) {
    await this.load();
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}
