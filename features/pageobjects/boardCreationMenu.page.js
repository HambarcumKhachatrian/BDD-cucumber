const Page = require('./page');

class BoardCreationMenu extends Page {

    async createNewBoard (title) {
        await $('input[data-testid*="create"]').addValue(title);
        await $('button[data-testid*="submit"]').click()
    }
}

module.exports = new BoardCreationMenu();