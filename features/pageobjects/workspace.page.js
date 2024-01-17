const Page = require('./page');

class WorkspacePage extends Page {
    async navToWorkspacePage () {
        await $('button[data-testid*="workspace"]').click();
        await $('div[data-testid*="workspace-list"] a').click();
        await $('//h2[contains(text(), "Trello")]').waitForExist();
    }

    async openNewBoardPanel(button) {
        const buttons = {
            main: 'div.mod-add',
            side: 'button.yHNJHUiQwHcogt'
        }
        await $(`${buttons[button]}`).click();

    }

    async openNewBoardPanelWithSidMenu () {
        await $('button.yHNJHUiQwHcogt').waitForExist()
        await $('button.yHNJHUiQwHcogt').click();
    }
   
    async openBordByTitle(title) {
        await browser.pause(800)
        await $(`//div[text()="${title}"]`).click();
    }

    async verifyBoardDoesntExist (title) {
        // await $(`//div[text()="${title}"]`).waitForExist(600,10,false)
        return true
    }

}

module.exports = new WorkspacePage();