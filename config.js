//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "SFxml@gmail.com";
global.location = "SUKKUR,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923004223507@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/ItxxSF/SF-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923004223507";
global.sudo = process.env.SUDO || "923004223507";
global.owner = process.env.OWNER_NUMBER || "923004223507";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0NkZys2N0F3OVlGbmZuYXlBY1NjWDVtMGpVWnp1bXhkeXBUdkNjQlRHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHpobm9uaHp4dXR3Vk9WU3ZHSTc4T01kNFdUTytybTBJOHVRWHdzY2dubz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRlB1M1k2WXBqN3hLRTRSMFJJU1MyeHo2eGtkRTdvSkxVaXp4V2wvekVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5d2VldkIxemFzSDZ5R0ZzWStUNEdYMHQ3b2Rmcitwckp6R0xDWm14d2hnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9Ec0hpWE9sc3hocnJTcHBoNWJPeVJ6bDdSa0FzZzBjTURYSENMUXNGRlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml4eUxkNjRmTjVnQWhWalRtckRnemNUbzlnd2hLOWpNMXhVblZYdlQwekE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUFDdHdoc0Q1WEdERWliSU1BQzhDZy9XZnAwS2tkTEtvZlBZUGRJZTRuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzMzeW02VEFPN1l5ZGloOWFwZnNMamtXcDJGWmg2U1lLU2VFVWUwQUgwMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBzMG9qOGFKUzYrdmpHVU91Q3BtOGNlR1FEZHJrL3NyMU1GZzhsL0xIWmd2OEhwTlNZSnp5UzRpTHlrUUpYNThJUEt0K29WWjBKVGlxUmt3Y05lNGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiJkL1lCdFlHYTFvcVJhbWJKUklBdWlSRE5MZmpjb0V0eWl1NWFrV2hka29vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvZlA3a0NLb1N5LXZzOFJLSFk4MUh3IiwicGhvbmVJZCI6IjZmMTRjNTExLWVjMTktNDQ0Yy1iM2QwLTc1ODA0NDg4YzcyZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRlZJSENFTjh0NXh0U1VGV1dVbXpUL01IV0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGN1cUk3K0hlanFZMmREcTBlczlBVUFINkxJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxCWURIR0FMIiwibWUiOnsiaWQiOiI5MjMwMDQyMjM1MDc6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTIE1ZIFdPUkxEIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLU0g1dmNFRU9LaGhMUUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMN1ZPazQxVlRJamYrMEQwejVydWZSZDdtUHlqTEs3ZzBCRkJhbTlGU1ZzPSIsImFjY291bnRTaWduYXR1cmUiOiJiVnNIajBGKzFIYTJuVnI1ODhleGFoY3ZCZ3BiWDhGZGZBaDRkQnE2THZhajROOW5LK2tuVFdYWFpBZ292QVJEMEpXUmxZQjNWa0RUaWt4WFVsYTZBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiM1VBYWhpTmdLbXBUUnJvZnE4cmRwM3MyeTRlTjVkcDcvUFU5eEN6b2dmRWttQU5menlzSkxTY3ROVTdHWEFqeSsxQmo2cXNic1hteVk3SlR4K1pNZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwMDQyMjM1MDc6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTKzFUcE9OVlV5STMvdEE5TSthN24wWGU1ajhveXl1NE5BUlFXcHZSVWxiIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NzM0NTExLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUUzYiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-SF-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "SF",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "SF-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "SF",
  errorChat: process.env.ERROR_CHAT || "923004223507",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-zFmgXy0ju2k8LwOFhz4HT3BlbkFJGj86Ho967er5m4PXZXJS",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "SF").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
