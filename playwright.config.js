// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    globalSetup: require.resolve('./global-setup'),
    workers: 2,
    use: {
        baseURL: 'https://vurbl.com/',
        storageState: 'auth.json',
        browserName: 'chromium',
        viewport: null,
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'on-first-retry',
        trace: 'retain-on-failure'
    },
  };
  
  module.exports = config;