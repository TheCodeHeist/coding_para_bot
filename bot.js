const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
const prefix = config.prefix;
require("dotenv/config");

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.username}!`);
});

bot.login(process.env.BOT_TOKEN);
