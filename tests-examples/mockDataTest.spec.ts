import { test } from '@playwright/test';
import { mockData } from '../mocks/mocks';

test('should first', async ({ page }) => { 
  await page.goto('https://anastasiaa1890.github.io/mesto/');
  await page.route('https://mesto.nomoreparties.co/v1/cohort-39/cards', async route => {
  await route.fulfill({ 
    body: JSON.stringify(mockData)
   });
});

})