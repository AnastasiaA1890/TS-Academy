import { Page, Locator } from "@playwright/test";

export class Login {
  readonly page: Page;

  protected get userNameInput(): string {
    return '#userEmail';
  }

  protected get getPasswordInput(): string {
    return '#userPassword';
  }

  protected get submitBtn(): Locator {
    return this.page.locator('#login')
  }

  constructor(page: Page) {
    this.page = page;
  }

  public async openPage() {
    await this.page.goto('https://rahulshettyacademy.com/client');
  }

  public async validLogin(userName: string, password: string) {
    await this.page.type(this.userNameInput, userName);
    await this.page.type(this.getPasswordInput, password);
    await this.submitBtn.click();

  }
}
