import { TestedArray } from './../mocks/mockUrl';
import { test, expect } from '@playwright/test';
import setupMockData from '../mocks/testHelpers';

test('should first', async ({ page }) => {
  let testArr = TestedArray;
  await setupMockData(page, testArr);
  await page.goto('https://anastasiaa1890.github.io/mesto/');
  await expect(page.locator('.header__logo')).toBeVisible();
  /* const el = await page.locator('.element').all();
  const nameTitle = page.getByRole('heading', { name: 'nn' });
  el.map(async (p) => {
    return await p.nth(0).locator('.element__title').textContent();
  }) */
  await page.close()
})

test.skip('visual comp', async ({ page }) => { 
  const profile = page.locator('.profile__add-button')
  await page.goto('https://anastasiaa1890.github.io/mesto/');
  await expect(profile).toHaveScreenshot('addbutton.png');
  await page.close();
 })


