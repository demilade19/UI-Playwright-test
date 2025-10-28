// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  
  await page.goto('https://www.jumia.com.ng/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Jumia Nigeria/);
});

test('cart link', async ({ page }) => {
  await page.goto('https://www.jumia.com.ng/cart/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Cart' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('text', { name: 'Your cart is empty!' })).toBeVisible();
 await expect(page.getByText('Your cart is empty!')).toBeVisible();
 
});