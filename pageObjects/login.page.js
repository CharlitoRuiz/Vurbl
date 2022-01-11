const { expect, chromium } = require('@playwright/test');

exports.loginPage = class loginPage {

    constructor(page) {
        this.page = page
    }

    async goto(url) {  
          await this.page.goto(url)
      }
    
    async login(email, password){
        await this.page.click(".signup [href='/auth/login/']")
        await this.page.fill("[name='email'][type='text']", email)
        await this.page.fill('input[type="password"]', password)
        await this.page.click('button:has-text("Sign In")')
        await this.page.waitForEvent('load')
    }
}