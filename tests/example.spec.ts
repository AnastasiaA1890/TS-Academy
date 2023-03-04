import { test, expect } from '@playwright/test';
import { Login } from '../pageobjects/Login';

test('Should be able to add item to cart', async ({ page }) => { 
  /* const userName: string = 'nastiy1890@yandex.ru';
  const password: string = 'Toxic1890'; */
  const login = new Login(page);
  await login.openPage();
  await login.validLogin('nastiy1890@yandex.ru', 'Toxic1890');
})
