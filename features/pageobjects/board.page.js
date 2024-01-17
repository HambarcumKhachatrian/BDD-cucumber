const Page = require('./page');

class BoardPage extends Page {

    async verifyAsBoardPage() {
        await expect($('div.RPO6eTW4FLJhI0')).toExist();
    }

    async deleteBorad() {
        const boradMenuIsDisplayed = await $('div.board-menu').isDisplayed();
        if (!boradMenuIsDisplayed) {
            await $('span.leC8WfkzmokiUl>button:last-child').click();
        }
        await $('a.js-close-board').waitForClickable()
        await $('a.js-close-board').click();
        await $('input[type="submit"]').click();
        await $('button[data-testid*= delete]').click();
        await $('button[data-testid*= confirm]').click();
        await $('div.YEctMXs9uZbttS').waitForExist();
    }

    async createNewList(listTitle) {
        const textAreaIsOpen = await $('textarea[data-testid]').isExisting();
        if (textAreaIsOpen) {
            await $('textarea[data-testid]').setValue(listTitle);
            await $('button[type = "submit"]').click();
        } else {
            await $('button[data-testId="list-composer-button"]').click();
            await $('form textarea[data-testid]').setValue(listTitle);
            await $('button[type = "submit"]').click();
        }

    }

    async addNewCardToLastList (cardTitle) {
        await $('ol[id="board"]>li:last-of-type button[data-testId*=add]').click();
        await $('ol[id="board"]>li:last-of-type form textarea').setValue(cardTitle);
        await browser.pause(200)
        await $('ol[id="board"]>li:last-of-type button[data-testId*=add]').click();
    }
}

module.exports = new BoardPage();