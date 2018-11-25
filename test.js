var messages = []
var messageCount = new Map()
var userMessage = new Map()

 function doThis(message, username) {   
    repeatMsg = message
	messages.push(repeatMsg)
    if (messageCount.has(repeatMsg)) {
		messageCount.set(repeatMsg, messageCount.get(repeatMsg) + 1)
	} else {
		messageCount.set(repeatMsg, 1)
	}
	userMessage.set(username, repeatMsg)

    if (messages.length > 20) {
        if (messageCount.get(messages[0]) == 1) messageCount.delete(messages[0])
        else messageCount.set(messages[0], messageCount.get(messages[0] - 1))
        messages.shift()
	}
	
	messageCount.forEach(msg => {
		if (msg == 1) {
			userMessage.forEach((value, key) => {
				console.log(key)
			})
		}
    })
}

doThis("AYAYA Clap", "pdbz199")