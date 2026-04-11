import { Locator, Page } from '@playwright/test';

export class MainPage {
  private readonly page: Page;
  public readonly buttonSort: Locator;
  public readonly sortOptions: Locator;
  public readonly cityTabs: Locator;
  public readonly placesFound: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonSort = this.page.locator('.places__sorting-type');
    this.sortOptions = this.page.locator('.places__option');
    this.cityTabs = this.page.locator('.locations__item-link');
    this.placesFound = this.page.locator('.places__found');
  }

  async selectSort(option: string): Promise<void> {
    await this.buttonSort.click();
    await this.sortOptions.filter({ hasText: option }).click();
  }

  async getCurrentSort(): Promise<string> {
    return (await this.buttonSort.textContent()) || '';
  }

  async selectCity(city: string): Promise<void> {
    await this.cityTabs.filter({ hasText: city }).click();
    await this.page.waitForSelector('.cities__card');
  }

  async getCityText(): Promise<string> {
    return (await this.placesFound.textContent()) || '';
  }
}
