module.exports = {
	config: {
		name: "goiadmin",
		author: "NIsAN",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "61567840496026") {
		var aid = ["61577174606216"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["সৌরভ বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","No Mention Sigma Boss Is Busy🗿🤌🏼💀","এতো মেনশন নাহ দিয়া সিংগেল সৌরভ রে একটা গফ দে 😒 😏","চুমু খাওয়ার বয়স টা চকলেট খেয়ে উড়িয়ে দিলো আমার বস সৌরভ😔😔","আমার বস সৌরভ এর সাথে কেও Sex করে না থুক্কু Text করে না😭😭","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে বস সৌরভ এর ইনবক্স এ যাও😇😇","মেনশন দিসনা পারলে একটা গফ দে","Mantion_দিস না বাঁলপাঁক্না সৌরভ প্রচুর বিজি 🥵🥀🤐"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};
