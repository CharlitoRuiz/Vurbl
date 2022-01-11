const { expect } = require('@playwright/test');

exports.searchPage = class searchPage {

    constructor(page) {
        this.page = page
        this.title = page.locator('.playlist_top__title h1')
    }

    async searchAudio(search){
        await this.page.click("[href='/browse/result']")
        await this.page.fill("div.top-container > div > div > div > form > input[type=text]", search)
        await this.page.keyboard.press("Enter")
        await this.page.waitForEvent("load")
        await this.page.click('div:nth-child(2) > div.vurbl__featured_audio__info > a')
        await this.page.waitForEvent('load')
    }
}
