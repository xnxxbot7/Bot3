const fs = require("fs-extra");

module.exports = {
config: {
		name: "goibot",
    version: "1.0",
		author: "Samir",
		countDown: 5,
		role: 0,
		shortDescription: "no-prefix",
		longDescription: "Bot Will Reply You In Engish/Bangla Language",
		category: "no prefix",
		guide: {
      en: "{p}{n}",
    }
	},

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {
  
  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = ["ღ••\n– কোনো নেতার পিছনে নয়.!!🤸‍♂️\n– ঈশ্বরের পিছনে দাড়াও জীবন বদলে যাবে হরে কৃষ্ণ.!!🖤🌻\n۵", "-!\n__ঈশ্বরের উপর থেকে নিরাশ হওয়া যাবে না! ঈশ্বর অবশ্যই তোমাকে ক্ষমা করে দিবেন☺️🌻\n🙏🏼🙏🏼💙🌸\n-!", "~ধর্ম অহংকার করতে শেখায় না!🌸\n\n- ধর্ম ভালো পথে চলতে শেখায়🥀", "~বেপর্দা নারী যদি নায়িকা হতে পারে\n _____🤗🥀 -তবে পর্দাশীল নারী গুলো সব ধর্মের অনুসারী__🌺🥰\n  __হরে কৃষ্ণ🙏🏼🙏🏼", "┏━━━━ 🕉️ ━━━━┓\n 🖤📿স্মার্ট নয় ধার্মিক 📿🥰\n 🖤📿 জীবন সঙ্গি খুঁজুন 📿🥰\n┗━━━━ 🕉️ ━━━━┛", "ღ࿐– যখন মানুষের জ্বর হয়,😇\n🖤তখন পাপ গুলো ঝড়ে পড়তে থাকে☺️\n– হরে কৃষ্ণ🙏🏼🙏🏼●───༊༆", "~🍂🦋\n              ━𝐇𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬 𝐈𝐬 𝐄𝐧𝐣𝐨𝐲𝐢𝐧𝐠 𝐓𝐡𝐞 𝐋𝐢𝐭𝐭𝐥𝐞\n                          ━𝐓𝐡𝐢𝐧𝐠𝐬 𝐈𝐧 𝐋𝐢𝐟𝐞..♡🌸\n           ━HAPPY 𝐅𝐨𝐫 𝐄𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠...💗🥰", "•___💜🌈___•\n°___:))-তুমি আসক্ত হও-||-🖤🌸✨\n°___:))-তবে নেশায় নয় ঈশ্বরের প্রতি-||-🖤🌸✨\n•___🍒🖇️✨___•", "─❝হাসতে❜❜ হাসতে❜❜ একদিন❜❜😊😊\n ━❥❝সবাইকে❜❜ ─❝কাদিয়ে ❜❜বিদায়❜❜ নিবো❜❞.!!🙂💔🥀 ", "🦋🥀࿐\nლ_༎হাজারো༎স্বপ্নের༎শেষ༎স্থান༎••༊🙂🤲🥀\n♡_༎মাটির নিচে༎_♡❤\n🦋🥀࿐", "•\n\nপ্রসঙ্গ যখন ধর্ম নিয়ে•🥰😊\nতখন আমাদের সনাতন ধর্মই সেরা•❤️\nজয় শ্রী রাম🌸❤️", "🥀😒কেউ পছন্দ না করলে,,,,\n        কি যায় আসে,,🙂\n                😇ঈশ্বর তো,,\n        পছন্দ করেই বানিয়েছে,,জয় শ্রী রাম📿🙏🏼♥️🥀\n         🥰  ", "🌼 এত অহংকার করে লাভ নেই! 🌺 \n  মৃত্যুটা নিশ্চিত,, শুধু সময়টা\n   অ'নিশ্চিত।🖤🙂 ",
             "_🌻••ছিঁড়ে ফেলুন অতীতের\nসকল পাপের\n                 অধ্যায় ।\n_ফিরে আসুন ঈশ্বরের ভালোবাসায়••🖤🥀", "_বুকে হাজারো কষ্ট নিয়ে\n                  হরে কৃষ্ণ বলাটা••!☺️\n_ঈশ্বরের প্রতি অগাধ বিশ্বাসের নমুনা❤️🥀", "_ঈশ্বরের ভালোবাসা পেতে চাও•••!🤗\n\n_তবে ভগবান শ্রী কৃষ্ণ কে অনুসরণ করো••!🥰"];

    var rand = Messages[Math.floor(Math.random() * Messages.length)]
    
        if ((event.body.toLowerCase() == "love bot") || (event.body.toLowerCase() == "love bot")) {
         return api.sendMessage("Hmm... Bot is too shy to love the bot admin :))", threadID);
       };

        if ((event.body.toLowerCase() == "কেমন আছেন সবাই") || (event.body.toLowerCase() == "kemon achen sobai")) {
         return api.sendMessage("ভালো আছি আপনি কেমন আছেন 😇😇", threadID);
       };

       if ((event.body.toLowerCase() == "কি করো") || (event.body.toLowerCase() == "ki koro")) {
         return api.sendMessage("কিছু করি না তোমার সাথে কথা বলি, তুমি??", threadID);
       };

       if ((event.body.toLowerCase() == "ভাত খাইছো") || (event.body.toLowerCase() == "vat khaicho")) {
         return api.sendMessage("না ভাত দেই নাই🥺🥺, তুমি খাইছো ??", threadID);
       };

       if ((event.body.toLowerCase() == "k apni") || (event.body.toLowerCase() == "কে আপনি")) {
         return api.sendMessage("HI I'M 𝗦𝗢𝗨𝗥𝗔𝗩 CHAT BOT 🤗😇", threadID);
       };

      if ((event.body.toLowerCase() == "ভালো") || (event.body.toLowerCase() == "valo")) {
         return api.sendMessage("আমিও ভালো🥴😜", threadID);
       };

       if ((event.body.toLowerCase() == "কেনো") || (event.body.toLowerCase() == "kno")) {
         return api.sendMessage("কেনো মানে কি 😳😳", threadID);
       };

       if ((event.body.toLowerCase() == "na") || (event.body.toLowerCase() == "না")) {
         return api.sendMessage("কেনো না 😭😭", threadID);
       };

       if ((event.body.toLowerCase() == "tt go mng") || (event.body.toLowerCase() == "tt go mng")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
         return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
       };

       if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "clmm bot")) {
         return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
       };

       if ((event.body.toLowerCase() == "bot cc")) {
         return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
       };

       if ((event.body.toLowerCase() == "cc bot")) {
         return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
       };

       if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
         return api.sendMessage("️ that's very commendable hihi :>", threadID);
       };

       if ((event.body.toLowerCase() == "dm bot")) {
         return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
       };

       if ((event.body.toLowerCase() == "nobody loves me")) {
         return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot love the admin bot")) {
         return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
       };

       if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
         return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
       };

       if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
         return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
       };

       if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
         return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
       };

       if ((event.body.toLowerCase() == "is the bot sad")) {
         return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot love you")) {
         return api.sendMessage("Yes I love you and everyone so much", threadID);
       };

       if ((event.body.toLowerCase() == "bot goes to sleep")) {
         return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
       };

       if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
         return api.sendMessage("I'm full when I see you eat <3", threadID);
       };

       if ((event.body.toLowerCase() == "bot love me")) {
         return api.sendMessage("Yes <3", threadID);
       };

       if ((event.body.toLowerCase() == "bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
         return api.sendMessage("Yes <3", threadID);
       };

    if ((event.body.toLowerCase() == "oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "chup thak")) {
     return api.sendMessage("️Amr Mukh, Amr iccha, Amr Mon. Tor ki bal,,,shala abal...ja vaag... 😒🙄", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "khana khaya?") || (event.body.toLowerCase() == "khaiso")) {
     return api.sendMessage("️Nh...Tmk khabo.💖🥳", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "k") || (event.body.toLowerCase() == "k?")) {
     return api.sendMessage("️K na K😕", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "guyz") || (event.body.toLowerCase() == "guys")) {
     return api.sendMessage("️Don't Call Me Guys Bcz I AM Yours😊", threadID, messageID);
   };
    
  if ((event.body.toLowerCase() == "wife") || (event.body.toLowerCase() == "bou")) {
     return api.sendMessage("️Yes, My Husband🥰", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "gm") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("️Good Morningg!🌄", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn") || (event.body.toLowerCase() == "good night")) {
     return api.sendMessage("️Good Night🌃, Take Care Babe🥺", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "bro")) {
     return api.sendMessage("️But I Am Girl, You Can Call Me Bby", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "boy")) {
     return api.sendMessage("️bbe, I Am Girl 😑", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "beb") || (event.body.toLowerCase() == "bebi")) {
     return api.sendMessage("️hm Beb😚🖤", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "baby")) {
     return api.sendMessage("️bolo Baby😚🖤", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "bebe")) {
     return api.sendMessage("hmm Babe😚🖤", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "fight") || (event.body.toLowerCase() == "fyt")) {
     return api.sendMessage("️Sorry, We Are Peace Lover ✌🏻🕊", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hii") || (event.body.toLowerCase() == "Hi")) {
     return api.sendMessage("️HI HELLO 👋🏼🤗🤗", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hlw")) {
     return api.sendMessage("️HI HOW ARE YOU 🤗🤗🤗", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "who are you") || (event.body.toLowerCase() == "who r u")) {
     return api.sendMessage("️I Am 𝗦𝗢𝗨𝗥𝗔𝗩  B o T, An AI Based Messenger Chatbot.", threadID, messageID);
   };
  
  if (event.body.indexOf("🥰") == 0 || (event.body.toLowerCase() == "🖤") || (event.body.indexOf("😍") == 0)) {
    var msg = {
      body: ` ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};
