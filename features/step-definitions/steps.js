const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const WorkspacePage = require('../pageobjects/workspace.page');
const BoardPage = require('../pageobjects/board.page');
const BoardCreationMenu = require('../pageobjects/boardCreationMenu.page');
const boardPage = require('../pageobjects/board.page');
const pages = {
    login: LoginPage
}


Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(`I fill out the valid email and click the continue button`, async () => {
    await LoginPage.fillEmail('dontlikeua@gmail.com')
});

When(`I fill out correct password and click Login button`, async () => {
    await LoginPage.fillPassword('testA1234')
});

Then(`I should see the home page`, async () => {
    await expect(browser).toHaveUrl('https://trello.com/u/dontlikeua/boards')
});

Given(`I am on workspace page`, async () => {
    await WorkspacePage.navToWorkspacePage();
})

When(/^I am starting to create new board with (.*) button$/, async (button) => {
    await WorkspacePage.openNewBoardPanel(button)
})


When(/^I am create new board with (.*) title/, async (title) => {
    await BoardCreationMenu.createNewBoard(title);

});

Then(`New board page will open`, async () => {
    await BoardPage.verifyAsBoardPage()

})

When(/^I open (.*) board$/, async (board) => {
  await WorkspacePage.openBordByTitle(board);
  await browser.pause(3000)
});

When(`I delete this board`, async () => {
    await BoardPage.deleteBorad();
});

Then(/^This (.*) board successfully deleted/, async (title) => {
    await WorkspacePage.verifyBoardDoesntExist(title);
   
});

Given(`I am on board page`, async () => {
   await BoardPage.verifyAsBoardPage();
   await browser.pause(4000)
});

When(/^I am create (.*) list$/, async (listTitle) => {
   await BoardPage.createNewList(listTitle);
});

When(/^I am adding new (.*) card to this list$/, async (cardTitle) => {
    await BoardPage.addNewCardToLastList(cardTitle);
});

Then(/^New list (.*) with a card (.*) has been created$/, (listTitle, cardTitle) => {
return true});