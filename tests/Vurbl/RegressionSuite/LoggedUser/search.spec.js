const { test, expect } = require('@playwright/test');
const { searchPage } = require('../pageObjects/search.page');
const searchData = require('../data/search.json');

test('Search audio', async ({ page }) => {
    const search = searchData.search
    const searchpage = new searchPage(page)
    await page.goto('/browse/result')
    await searchpage.searchAudio(search)
    await expect(searchpage.title).toContainText('Carlos Alvarado')
});