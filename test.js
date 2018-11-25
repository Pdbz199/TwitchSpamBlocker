/** 
 * @param {string} message
*/
var doThis = (message) => {
    let repeatMsg = ""
    for (let i = 0; i < message.length; i++) {
        repeatMsg += message.substring(0, i+1)
        if (repeateymessage.substring(message.length - repeatMsg.length)) break
    }

    console.log(repeatMsg)
}

doThis("AYAYA Clap LUL GIT GUD AYAYA Clap LUL GIT GUD AYAYA Clap")