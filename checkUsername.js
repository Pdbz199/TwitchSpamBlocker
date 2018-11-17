var checkWord = require('check-word')
var words = checkWord('en')
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * @param {string} username
 */
var isBotUsername = (username) => {
    let splitUsername = usernameSplitter(username)

    if (typeof splitUsername == "object" && isTwoWords(splitUsername[0])) return true
    return false
}

/**
 * @param {string} username
 */
var usernameSplitter = (username) => {
    let regExp = new RegExp(numbers.join("|"))
    let splitUsername = username.split('')

    let match = regExp.exec(username)
    if (match) {
        username = username.replace(match[0], '<?>' + match[0])
        splitUsername = username.split('<?>')
        
        return splitUsername
    } else {
        return false
    }
}

/**
 * @param {string} username
 */
var isTwoWords = (username) => {
    for (let i = 2; i < username.length; i++) {
        let firstWord = username.substring(0, i)
        let secondWord = username.substring(i, username.length)

        if (words.check(firstWord) && words.check(secondWord)) {
            return true
        }
    }
    return false
}

module.exports = isBotUsername;