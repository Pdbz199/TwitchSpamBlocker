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

	/* 
	 * iterate through substrings of message and find out when the message repeats itself
	 * check if one of the next two senders also sends some form of that repeated message
	 * if so, add original sender and any followers to repeatMessageSenders
	 * UNLESS sender.mod || sender.username === channel.substring(1)
	 * then start banning people via setTimeout function I guess:
	 * 
	 * for (let i = 0; i < repeatMessageSenders.length; i++) {
	 * 	   let currUser = repeatMessageSenders[i]
	 *     if (isBotUsername(currUser)) client.ban(channel, currUser, "Spam bot")
	 * }
	 */
})

// let usernames = [/*first three are actual bot names*/ "noisyairfields539", "isolatedfeeds76", "frightenedounce7", "pdbz199"]