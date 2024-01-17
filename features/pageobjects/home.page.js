const Page = require('./page');

class HomePage extends Page {

    async createNewBoard() {
        await $('div.mod-add').click();
    }
    async addTitleToNewBoard (title){
        await $('input[data-testid*="create"]').addValue(title);
        await $('button[data-testid*="submit"]').click()
    }

}

module.exports = new HomePage();