const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
   aliases: ["owner", "botinfo" ],
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = " ⩸_𝗦𝗢𝗨𝗥𝗔𝗩 _⩸ ";
		const ownAge = "『 ⩸_ 20 _⩸ 』";
		const messenger = " https://m.me/sourav.nath404 ";
		const authorFB = " https://www.facebook.com/profile.php?id=61577174606216 ";
		const authorNumber = "01880962478";
		const Status = "⩸__𝙸𝙽 𝙰 𝚁𝙻𝚂 𝚆𝙸𝚃𝙷 𝚃𝙾𝙽𝙽𝙸__⩸";
		const urls = [
"https://drive.google.com/uc?export=view&id=1xUBIlUfnukeF7qT67-XiBvWhg5jVtVo4",
"https://drive.google.com/uc?export=view&id=1sF-Oo8E6ZT-oeFTSVWAVHgfUDOdRUmxO"
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `✨《 𝐁𝐨𝐭 𝐀𝐧𝐝 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 》🎀
\🤖彡𝐵𝑜𝑡 𝑁𝑎𝑚𝑒 :  ${global.GoatBot.config.nickNameBot}
\👾彡𝐵𝑜𝑡 𝑆𝑦𝑠𝑡𝑒𝑚 𝑃𝑟𝑒𝑓𝑖𝑥 : ${global.GoatBot.config.prefix}
\💙彡𝑂𝑤𝑛𝑒𝑟 𝑁𝑎𝑚𝑒 : ${authorName}
\📝彡𝐴𝑔𝑒  : ${ownAge}
\💕彡𝑅𝑒𝑙𝑎𝑡𝑖𝑜𝑛𝑆ℎ𝑖𝑝: ${Status}
\🌐彡𝑊𝑝 : ${authorNumber}
\🌍彡𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘 𝐿𝑖𝑛𝑘 :  ${authorFB}
\🗓彡𝐷𝑎𝑡𝑒 : ${date}
\⏰彡𝑁𝑜𝑤 𝑇𝑖𝑚𝑒 : ${time}
\🔰彡𝐴𝑛𝑦 𝐻𝑒𝑙𝑝 𝐶𝑜𝑛𝑡𝑎𝑐𝑡 : ${messenger}__⩸
\📛彡𝐵𝑜𝑡 𝐼𝑠 𝑅𝑢𝑛𝑛𝑖𝑛𝑔 𝐹𝑜𝑟 : ${uptimeString}
    𝑻𝒈: ❎❎❎❎
    𝑰𝒏𝒔𝒕𝒂: ❎❎❎❎
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
