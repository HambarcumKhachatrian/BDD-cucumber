const Page = require('./page');

class LoginPage extends Page {
    async open() {
        await super.open('');
        await $('header[class *= "Big"] a[href *= "login"]').click();
    }

    async fillEmail(email) {
        await $('input[type="email"]').setValue(email);
        await $('button[id*="submit"]').click();
    }

    async fillPassword(password) {
        await $('input[id="password"]').waitForDisplayed()
        await $('input[id="password"]').setValue(password);
        await $('button[id*="submit"]').click();
    }

}

module.exports = new LoginPage();