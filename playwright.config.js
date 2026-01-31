
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: [
    ['html', { open: 'never' }]
  ],

  use: {
    headless: false,
    baseURL: 'https://www.swifttranslator.com/',
    viewport: { width: 1280, height: 720 }
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
});

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: [
    ['html', { open: 'never' }]
  ],

  use: {
    headless: false,
    baseURL: 'https://www.swifttranslator.com/',
    viewport: { width: 1280, height: 720 }
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
});
