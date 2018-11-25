var tmi = require("tmi.js")
var isBotUsername = require("./checkUsername.js")

//BOT CONFIG
var options = {
	options : {
		debug : true
	},
	connection : {
		reconnect : true
	},
	identity : {
		username : "SpamBlocker2",
		password : "oauth:j4mtn62qgo0az6d9yrnzwe8swhc2m3"
	},
	channels : ["#pdbz199"]
}

var bot = new tmi.client(options)

bot.connect()

bot.on("connected", function(address, port) {
    bot.say("#pdbz199", "The bot has been activated!")
})


var messages = []
var repeatingMsgUsers = []
var messageCount = new Map()
var userMessage = new Map()
var findSmallestRepeat = (message) => {
	let returnMsg = ""
    for (let i = 0; i < message.length; i++) {
        returnMsg = message.substring(0, i+1)
        if (returnMsg === message.substring(message.length - returnMsg.length)) break
	}
	
	return repeatMsg
}

bot.on("chat", function(channel, sender, message, self) {
	if (self) return

	repeatMsg = findSmallestRepeat(message)
	messages.push(repeatMsg)
    if (messageCount.has(repeatMsg)) {
		messageCount.set(repeatMsg, messageCount.get(repeatMsg) + 1)
	} else {
		messageCount.set(repeatMsg, 1)
	}
	userMessage.set(sender.username, repeatMsg)

    if (messages.length > 20) {
        if (messageCount.get(messages[0]) == 1) messageCount.delete(messages[0])
        else messageCount.set(messages[0], messageCount.get(messages[0] - 1))
        messages.shift()
	}
	
	messageCount.forEach(msg => {
		if (msg >= 8) {
			userMessage.forEach((value, key) => {
				if (value === msg && isBotUsername(key)) repeatingMsgUsers.push(key)
			})
		}
	})

	if (messages.length == 20) {
		repeatingMsgUsers.map(username => {
			client.ban(channel, username, "Spam bot")
		})
		messages = []
		repeatingMsgUsers = []
		messageCount.clear()
		userMessage.clear()
	}
})