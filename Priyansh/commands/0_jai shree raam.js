const fs = require("fs");
module.exports.config = {
  name: "asslam alaikum",
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
  if(react.includes("jay shri ram") ||
     react.includes("asslam alaikum") || react.includes("Asslamu alaikum") || react.includes("asslamalaikum") ||
react.includes("ASSLAM ALAIKUM") ||
react.includes("ASSLAMALIKUM")) {
    var msg = {
        body: `【  WAALAIKUM ASSLAM 🌹🌹】`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤲", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
