var tmi = require("tmi.js")
var isBotUsername = require("./checkUsername.js")
var repeatMessageSenders = []
var repeatMessages = new Map()

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

bot.on("chat", function(channel, sender, message, self) {
	if (self) return

	if(isBotUsername(sender.username) && !(sender.mod || sender.username === channel.substring(1))) {
		for (let i = 0; i < repeatMessageSenders.length; i++) {
			client.ban(channel, repeatMessageSenders[i], "Spam bot")
		}
	}
})

// let usernames = [/*first three are actual bot names*/ "noisyairfields539", "isolatedfeeds76", "frightenedounce7", "pdbz199"]