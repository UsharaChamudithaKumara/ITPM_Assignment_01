import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

const input = (page) => page.locator('textarea').first();
const output = (page) => page.locator('div.whitespace-pre-wrap').first();

// Pos_Fun_0001
test('Pos_Fun_0001 – Simple request', async ({ page }) => {
  await input(page).fill('mata adha bath oonee');
  await expect(output(page)).toContainText('මට අද බත් ඕනේ');
});

// Pos_Fun_0002
test('Pos_Fun_0002 – Question sentence', async ({ page }) => {
  await input(page).fill('oyaata adha kohomadha kiyala aehuve');
  await expect(output(page)).toContainText('ඔයාට අද කොහොමද කියල ඇහුවෙ');
});

// Pos_Fun_0003
test('Pos_Fun_0003 – Imperative sentence', async ({ page }) => {
  await input(page).fill('vahaama gedhara enna');
  await expect(output(page)).toContainText('වහාම ගෙදර එන්න');
});

// Pos_Fun_0004
test('Pos_Fun_0004 – Greeting', async ({ page }) => {
  await input(page).fill('aayuboovan oyaata suba udhaesanayak');
  await expect(output(page)).toContainText('ආයුබෝවන් ඔයාට සුබ උදැසනයක්');
});

// Pos_Fun_0005
test('Pos_Fun_0005 – Repeated words', async ({ page }) => {
  await input(page).fill('hari hari hodhatama vaedee kalaa');
  await expect(output(page)).toContainText('හරි හරි හොදටම වැඩේ කලා');
});

// Pos_Fun_0006
test('Pos_Fun_0006 – Future tense', async ({ page }) => {
  await input(page).fill('api heta office yanna hadhanavaa');
  await expect(output(page)).toContainText('අපි හෙට office යන්න හදනවා');
});

// Pos_Fun_0007
test('Pos_Fun_0007 – Interrogative informal', async ({ page }) => {
  await input(page).fill('oyaa adha enne naedhdha');
  await expect(output(page)).toContainText('ඔයා අද එන්නෙ නැද්ද');
});

// Pos_Fun_0008
test('Pos_Fun_0008 – Compound sentence', async ({ page }) => {
  await input(page).fill('api kaeema kaalaa yanava film ekak balanna');
  await expect(output(page)).toContainText('අපි කෑම කාලා යනව film එකක් බලන්න');
});

// Pos_Fun_0009
test('Pos_Fun_0009 – Conditional sentence', async ({ page }) => {
  await input(page).fill('oya enavaanam mama gedhara innavaa');
  await expect(output(page)).toContainText('ඔය එනවානම් මම ගෙදර ඉන්නවා');
});

// Pos_Fun_0010
test('Pos_Fun_0010 – Polite request', async ({ page }) => {
  await input(page).fill('please mata adha podi udhavvak karanna puLuvandha');
  await expect(output(page)).toContainText('please මට අද පොඩි උදව්වක් කරන්න පුළුවන්ද');
});

// Pos_Fun_0011
test('Pos_Fun_0011 – Mixed English', async ({ page }) => {
  await input(page).fill('heta Zoom meeting eken passe office yanna thiyenavaa');
  await expect(output(page)).toContainText('හෙට Zoom meeting එකෙන් පස්සෙ office යන්න තියෙනවා');
});

// Pos_Fun_0012
test('Pos_Fun_0012 – Place name', async ({ page }) => {
  await input(page).fill('api Kandy gihin dhaLadhaa maaligaavata yanavaa');
  await expect(output(page)).toContainText('අපි Kandy ගිහින් දළදා මාලිගාවට යනවා');
});

// Pos_Fun_0013
test('Pos_Fun_0013 – Long mixed sentence', async ({ page }) => {
  await input(page).fill('mama gedhara yanavaa adha oya enne naedhdha yanna');
  await expect(output(page)).toContainText('මම ගෙදර යනවා අද ඔය එන්නෙ නැද්ද යන්න');
});

// Pos_Fun_0014
test('Pos_Fun_0014 – Email request', async ({ page }) => {
  await input(page).fill('Documents tika attach karala mata email ekak evanna');
  await expect(output(page)).toContainText('Documents ටික attach කරල මට email එකක් එවන්න');
});

// Pos_Fun_0015
test('Pos_Fun_0015 – WhatsApp request', async ({ page }) => {
  await input(page).fill('Teams meeting ekee link eka WhatsApp karanna puLuvandha');
  await expect(output(page)).toContainText('Teams meeting එකේ link එක WhatsApp කරන්න පුළුවන්ද');
});

// Pos_Fun_0016 
test('Pos_Fun_0016 – Long paragraph', async ({ page }) => {
  await input(page).fill(
    'iiLaGa sathiyee api family trip ekak yanna plan karala thiyenavaa. ee nisaa hotel eka book karala travel details check karala budget eka hariyata hadhanna oonee. iita passe api okkoma ready vemu.'
  );
  await expect(output(page)).toContainText('ඊළඟ සතියේ අපි family trip එකක් යන්න plan කරල තියෙනවා. ඒ නිසා hotel එක book කරල travel details check කරල budget එක හරියට හදන්න ඕනේ. ඊට පස්සෙ අපි ඔක්කොම ready වෙමු.');
});

// Pos_Fun_0017
test('Pos_Fun_0026 – Polite invitation', async ({ page }) => {
  await input(page).fill('oyaata heta raesviimata enna puluvandha');
  await expect(output(page)).toContainText('ඔයාට හෙට රැස්වීමට එන්න පුලුවන්ද');
});

// Pos_Fun_0018
test('Pos_Fun_0027 – Family dinner plan', async ({ page }) => {
  await input(page).fill('api adha raeeta family ekath ekka dinner eka ganna yanna inne');
  await expect(output(page)).toContainText('අපි අද රෑට family එකත් එක්ක dinner එක ගන්න යන්න ඉන්නේ');
});

// Pos_Fun_0019
test('Pos_Fun_0028 – Polite document request', async ({ page }) => {
  await input(page).fill('please mee document eka ikmanata review karanna');
  await expect(output(page)).toContainText('please මේ document එක ඉක්මනට review කරන්න');
});

// Pos_Fun_0020
test('Pos_Fun_0029 – Morning plan', async ({ page }) => {
  await input(page).fill('heta udheema palliyata yanna thiyenavaa');
  await expect(output(page)).toContainText('හෙට උදේම පල්ලියට යන්න තියෙනවා');
});

// Pos_Fun_0021
test('Pos_Fun_0030 – Help request', async ({ page }) => {
  await input(page).fill('oyaa mee vaedeta adhavath help ekak dhenavadha?');
  await expect(output(page)).toContainText('ඔයා මේ වැඩෙට අදවත් help එකක් දෙනවද?');
});

// Pos_Fun_0022
test('Pos_Fun_0031 – Weather based decision', async ({ page }) => {
  await input(page).fill('adha vaessa nisaa gedhara inna baeluve');
  await expect(output(page)).toContainText('අද වැස්ස නිසා ගෙදර ඉන්න බැලුවෙ');
});

// Pos_Fun_0023
test('Pos_Fun_0032 – Software development plan', async ({ page }) => {
  await input(page).fill('api adha aluth software ekak hadhanna inne');
  await expect(output(page)).toContainText('අපි අද අලුත් software එකක් හදන්න ඉන්නේ');
});

// Pos_Fun_0024
test('Pos_Fun_0033 – Exam preparation', async ({ page }) => {
  await input(page).fill('next month vath api exam valata ready venna one');
  await expect(output(page)).toContainText('next month වත් අපි exam වලට ready වෙන්න one');
});