import { test, expect } from '@playwright/test';

test('Pos_UI_0003 – Output remains unchanged when switching typing language', async ({ page }) => {
  await page.goto('/');

  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();
  const languageDropdown = page.locator('select').first();

  // Type input
  await input.type('mama gedhara yanavaa');
  await expect(output).toContainText('ගෙදර');

  // Switch typing language (without changing input)
  await languageDropdown.selectOption({ index: 1 });
  await expect(output).toContainText('ගෙදර');
});
