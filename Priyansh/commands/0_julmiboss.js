const fs = require("fs");
module.exports.config = {
  name: "malkin",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "𝑱𝑼𝑳𝑴𝑰 𝑱𝑨𝑨𝑻", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Me boss hu teri") ||
     react.includes("Teri malkin hu") || react.includes("Teri boss hu me") || react.includes("Teri malik hu me") ||
react.includes("Teri boss hu mai") ||
react.includes("Malkin se battmizi")) {
    var msg = {
        body: `【𝐒0𝐑𝐑𝐘 𝐌𝐀𝐋𝐊𝐈𝐍 𝐀𝐁 𝐆𝐀𝐋𝐓𝐈 𝐍𝐀𝐇𝐈 𝐊𝐀𝐑𝐔𝐍𝐆𝐀 𝐏𝐋𝐒 𝐀𝐊 𝐁𝐀𝐑 𝐌𝐀𝐅 𝐊𝐀𝐑 𝐃0______🤐😙😭😭🙏🙏】`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👍", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
