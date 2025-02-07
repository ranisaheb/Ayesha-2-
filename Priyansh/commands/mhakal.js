const fs = require("fs");
module.exports.config = {
	name: "mahakal",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "ABHISHEK", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("salam") ||
     react.includes("assalam alaikum") || react.includes("Asslamalaikum") || react.includes("ASSLAM O ALAIKUM") ||
react.includes("ASSLAM ALAIKUM") ||
react.includes("Asslamu alaikum")) {
		var msg = {
				body: `【  WA ALAIKUM ASSALAM _________________❤️  】`,attachment: 
fs.createReadStream(__dirname + `/noprefix/`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
