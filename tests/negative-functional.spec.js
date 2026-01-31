import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

const input = (page) => page.locator('textarea').first();
const output = (page) => page.locator('div.whitespace-pre-wrap').first();

// Neg_Fun_01
test('Neg_Fun_M_01 – Heavy repeated characters', async ({ page }) => {
  await input(page).fill('apiiiii adaa raeetaaa famlyyy ekkkaa dinnerrr gnnna yannaaa inneee');
  await expect(output(page)).toContainText('අපි අද රෑට family එකත් එක්ක dinner ගන්න යන්න ඉන්නේ');
});

// Neg_Fun_02
test('Neg_Fun_M_02 – Spelling errors in meeting request', async ({ page }) => {
  await input(page).fill('oyaa hettaa officeee meetng ekktaa ennnaa puluvandhaa??');
  await expect(output(page)).toContainText('ඔයාට හෙට office meeting එකට එන්න පුලුවන්දා?');
});

// Neg_Fun_03
test('Neg_Fun_M_03 – Corrupted document request', async ({ page }) => {
  await input(page).fill('plz meee documnttt ekkkaa ikmnataa reveww karala repllyyy dennna');
  await expect(output(page)).toContainText('please මේ document එක ඉක්මනට review කරල reply දෙන්න');
});

// Neg_Fun_04
test('Neg_Fun_M_04 – Weather sentence with typos', async ({ page }) => {
  await input(page).fill('adhaa vaessaaa vahinaa nissaa gedhrrra innnaa baeluveee');
  await expect(output(page)).toContainText('අද වැස්ස වහින නිසා ගෙදර ඉන්න බැලුවෙ');
});

// Neg_Fun_05
test('Neg_Fun_M_05 – Malformed future plan', async ({ page }) => {
  await input(page).fill('nxt weeeeek api exaammm walataa prepaaree vennnaa hadhannaa');
  await expect(output(page)).toContainText('next week අපි exam වලට ready වෙන්න හදන්නෙ');
});

// Neg_Fun_06
test('Neg_Fun_M_06 – Symbols mixed with text', async ({ page }) => {
  await input(page).fill('@@@ oyaa ### meee vaeeddettaaa $$ helppp ekkakkk dhenavaddhaa ???');
  await expect(output(page)).toContainText('ඔයා මේ වැඩේට help එක්කක් දෙනවද?');
});

// Neg_Fun_07
test('Neg_Fun_M_07 – Numbers mixed with text', async ({ page }) => {
  await input(page).fill('api 123 offce triiip ekkaaaa ynawaa');
  await expect(output(page)).toContainText('අපි 1,2,3 office trip එක යනවා');
});

// Neg_Fun_08
test('Neg_Fun_M_08 – Corrupted mixed English', async ({ page }) => {
  await input(page).fill('Teams$$$ meet!!! link@@@ WhatsAp%%% karala evannaaa');
  await expect(output(page)).toContainText('Teams meeting link එක WhatsApp කරල එවන්න');
});

// Neg_Fun_09
test('Neg_Fun_M_14 – Distorted class related input', async ({ page }) => {
  await input(page).fill('panthiiyee mokkakkk hariiii wadak thiyenavadaaa adhaaa???');
  await expect(output(page)).toContainText('පන්තියෙ මොකක් හරි වැඩක් තියෙනවද අද?');
});

// Neg_Fun_10
test('Neg_Fun_M_10 – Excessive punctuation and repetition', async ({ page }) => {
  await input(page).fill('plzzz????? repppplyyyyyy sooooonnnnn');
  await expect(output(page)).toContainText('please reply soon');
});
