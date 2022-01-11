// global-setup.js
const { chromium } = require('@playwright/test');

module.exports = async config => {
  const { baseURL } = config.projects[0].use;
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(baseURL);
  
};