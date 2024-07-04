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
global.allowJids = process.env.ALLOW_JID || "923108488064@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/ItxxFARHAN/SF-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923108488064";
global.sudo = process.env.SUDO || "923108488064";
global.owner = process.env.OWNER_NUMBER || "923108488064";
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

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0JFMFZzMkdaY3ExREpBZzI1dTZ6cVFCdjNiWVZNN0JHZXgweUtXR3FFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjMwTUVLQjNXZGcySklQUkFLNW5NUkNGUWJTUzJLV2lqUEV5M0tHNkppUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRjI2dkJwbmJVQ1piYTMyd3MydEhaWDh1VVBqMUFkbTFwNW1keEJvdVZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyVnQwV1k4MDJOZlcrMXBTbExaMllJeSt5ZUV0VHVveGlFTk5GWWlRUDA0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklOVlcyT3VXWUJBTjdSVVE1TjVrZ1hFOXdzUmowUlNtYTF2a3pvZW9JMzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFFcHYvamhkZTRnYWNnaHgwWFA3MUt2bXdZd3pZeWd6ZFQ1c0NzZEk1MUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JibndRcUk0KzlCQ3MvU2F4NUxyWVQrcWpoYWQ0OWVLa2FzeVA1Z0YzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWEyUmY5Zy9JR0U1SHA0VVJXQUU2MUpRc3pZc3ZaTmZyUkhBWTA5Ykl3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZzR0NVcTBuNEpRQldsaG9wY3Q0WGtCWXJIOVBwZnU0VkdCSjV1d0RObm1RdFRmQjcwWlZrZGQxckJQZmZUM01VZ0YrdnJtVVFleE1TSVk5Y0NyMkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiJEMHFNOFdtOUpJemRDRnJaa2tlWWVHUDZOMTEzMlJWbnJUUkdpYlZvMUk4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEwODQ4ODA2NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4QTA3RkI5RDg4NUI3NjI2NzI2NkRDOUMzQTVFQzJDOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMDc0Nzg2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMDg0ODgwNjRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUE1MDVBMEM0OTU5QTlBODM3MzlGRTY5RUVEOEIyRTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDA3NDc4Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNXJEYUNUWnhUSjJCa21pdlZTMk9HQSIsInBob25lSWQiOiI2MGYxOWViNS1hYTYzLTQ1YzctOGYxZi0yNDA4OWE1NTkxNDYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVdPUGZtNjFTNEZ4UWJxd1g1YmhRSmZYbGU0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFBejg4MENYM2w2bWRxVnFIbDRGb0l0TG9EWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJaVEdFS1NKMSIsIm1lIjp7ImlkIjoiOTIzMTA4NDg4MDY0OjE0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfp6nSktC00Y/QvdC00Ljwn46uIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJTE51dVFFRUpTRW1iUUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJUZlpWV3llbExXOHZvenZsdW9KeUh5MEtWREpoZmVwa1FiakZaL3lPRzJJPSIsImFjY291bnRTaWduYXR1cmUiOiIxZEpRUWR1a3lBNzJpQTRld3Y2eFJ1eS9wWnhPdUhVc2JCcUhSVDZhc0RsdE1FcWxRam1WRXZIa2pJOFZydnl2MUY4RkNUYWFDZGYxQzdNdExGcHhCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUlQ0TUxCTlYzdGFraUVYc2c5RUVHOUVHcmFoYkcwVjFvdGh1ZzB2eWY2bjZkKzMzMENQZDZ0UjUrNUdZRmFJdUc2cHF3UnY4RExzMDFjZlFLR2c0Qmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMDg0ODgwNjQ6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVTMyVlZzbnBTMXZMNk03NWJxQ2NoOHRDbFF5WVgzcVpFRzR4V2Y4amh0aSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDA3NDc4NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOWEEifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-FARHAN-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "SF",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FARHAN-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "FARHAN",
  errorChat: process.env.ERROR_CHAT || "923108488064",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-rgxws8CpO1jgPxy0J2dvT3BlbkFJEBeYyEvUcW6xRW9f0GG6",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
