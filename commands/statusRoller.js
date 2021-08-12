module.exports = {
  name: "statusRoller",
  type: "default",
  description: "Loops through statuses for the bot itself.",
  execute(bot, prefix) {
    const statuses = [
      `${prefix}manual`,
      `${bot.users.cache.size} users!`,
    ];

    let i = 0;

    setInterval(() => {
      bot.user.setActivity(statuses[i], { type: "WATCHING" });

      if (i < statuses.length) {
        i++;
      }

      if (i === statuses.length) {
        i = 0;
      }
    }, 5000);
  },
};
