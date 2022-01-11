const { test } = require('@playwright/test');
const { playlistPage } = require('../pageObjects/playlist.page');
const playlistData = require('../data/playlist.json');


test('Add new playlist @regression', async ({ page }) => {
    // Variables
    const title = playlistData.title,
    description = playlistData.description,
    number = Math.floor(Math.random() * 10)
    await page.goto('/playlists/')
    const playlistpage = new playlistPage(page)
    await playlistpage.addPlaylist()
    await playlistpage.createPlaylist(title +' '+ number, description)
});