module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "PREM BABU",
	description: "left notification",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
  const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝐊𝐇𝐔𝐃 𝐇𝐈 𝐁𝐇𝐀𝐆 𝐆𝐘𝐀 😐👈" : "𝐀𝐃𝐌𝐈𝐍 𝐍𝐄 𝐆𝐔𝐒𝐒𝐄 𝐌𝐄 𝐍𝐈𝐊𝐀𝐋 𝐃𝐈𝐘𝐀😐👈";
  (typeof data.customLeave == "undefined") ? msg = "𝐒𝐔𝐊𝐀𝐑 𝐇𝐀𝐈 𝐄𝐊 𝐓𝐇𝐀𝐑𝐊𝐈 𝐊𝐀𝐌 𝐇𝐎 𝐆𝐘𝐀  😌👈\nनाम 👉 {name}\nरीजन 👉  {type}" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);
  
  var link = [  
"https://i.imgur.com/gr36kVq.jpeg",
"https://i.imgur.com/SmCHxJX.jpeg",
"https://i.imgur.com/sKFY4Td.jpeg",
"https://i.imgur.com/vksHZHe.jpeg",
  ];
  var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashO.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashO.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashO.jpg")).on("close", () => callback());
                                                                  }
