module.exports = class Page {

    open (path) {
        return browser.url(`https://trello.com/${path}`)
    }
}
