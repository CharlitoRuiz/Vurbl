const { expect } = require('@playwright/test');

exports.playlistPage = class playlistPage {

    constructor(page) {
        this.page = page
    }

    async addPlaylist(){
        await this.page.click("[href='/playlists/']")
        await this.page.waitForEvent('load')
        await this.page.click("div:nth-child(1) > div.vurbl__featured_audio__wr > a")
        await this.page.waitForEvent('load')       
        await this.page.click('div:nth-child(2) > div.vrbl__title > div > div.vrbl__player_action_button.add_to_playlist')
        await this.page.selectOption("[name='user_stations_slug']",{index: 0})
        await this.page.click("[data-action='click->popup#hideIfExact click->vurbl#createPlaylist']")
    }

    async createPlaylist(title, description){
        await this.page.click('#create_playlist_popup .mdc-select--required')
        await this.page.click('span.mdc-list-item__text')
        await this.page.fill("[aria-labelledby='playlistTitle'][type='text']", title)
        await this.page.fill("textarea.mdc-text-field__input[name='description']", description)
        await this.page.click("button.vurbl__create_playlist__button_save[type='submit']")
    }
}
