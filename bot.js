const Discord = require("discord.js");
const disbut = require("discord-buttons");
const bot = new Discord.Client();
disbut(bot);

const fs = require("fs");
const { prefix } = require("./config.json");
var http = require("http");
require("dotenv").config();

// Setup
bot.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const commandFile of commandFiles) {
  const command = require(`./commands/${commandFile}`);

  bot.commands.set(command.name, command);
}
// Front-end
console.clear();

bot.on("ready", () => {
  console.log(`Logged in sir!`);                            //----- 2 hours -----
  bot.commands.get("statusRoller").execute(bot, prefix );
  bot.commands.get("redditMemeGrabber").execute(bot, Discord, 1000 * 60 * 60 * 2 );
});

bot.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  // message.channel.send("Command: " + command);

  switch (command) {
    case "role":
      bot.commands.get("rolePicker").execute(bot, message, disbut);
      break;

    case "cf":
      bot.commands.get("contestLogger").execute(message, Discord);
      break;

    case "count_mb":
      bot.commands.get("roleMemberCount").execute(message, args);
      break;
  }
});

// Anti-sleep bot function
function startKeepAlive() {
  console.log("Pinging...");

  setInterval(function () {
    var options = {
      host: "coding-para-bot.herokuapp.com",
      port: 80,
      path: "/",
    };
    http
      .get(options, function (res) {
        res.on("data", function (chunk) {
          try {
            console.log("HEROKU RESPONSE: " + chunk);
          } catch (err) {
            console.log(err.message);
          }
        });
      })
      .on("error", function (err) {
        console.log("Error: " + err.message);
      });
  }, 20 * 60 * 1000);
}

bot.login(process.env.BOT_TOKEN);
startKeepAlive();
