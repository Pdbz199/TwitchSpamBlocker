var checkWord = require('check-word')
var words = checkWord('en')
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var numRE = new RegExp(numbers.join("|"))
var hasNums = new Map()

/**
 * @param {string} username
 * @param {RegExp} regExp
 */
var usernameSplitter = (username, regExp) => {
    let splitUsername = username.split('')

    let match = regExp.exec(username)
    if (match) {
        hasNums.set(username, true)

        username = username.replace(match[0], '<?>' + match[0])

        let numNums = username.length - match.index
        let splitter = `${match[0]}`

        for (let j = match.index + 1; j < username.length; j++) {
            splitter += splitUsername[j]
        }

        splitUsername = username.split('<?>')

        return splitUsername
    }
}

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

var isBotUsername = (username) => {
    let splitUsername = usernameSplitter(username, numRE)

    if (hasNums.get(username) && isTwoWords(splitUsername[0])) return true
    return false
}

let usernames = ["noisyairfields539", "isolatedfeeds76", "frightenedounce7", "pdbz199", "metaknight91"]

console.log(isBotUsername(usernames[3]))