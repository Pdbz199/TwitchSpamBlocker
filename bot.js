var tmi = require("tmi.js");

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
};

var bot = new tmi.client(options);

bot.connect();

bot.on("connected", function(address, port) {
    bot.say("#pdbz199", "The bot has been activated!");
});

bot.on("chat", function(channel, sender, message, self) {
	if (self) return;
})