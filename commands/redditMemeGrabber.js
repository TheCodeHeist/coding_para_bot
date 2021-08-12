const axios = require("axios");

module.exports = {
  name: "redditMemeGrabber",
  type: "application",
  description: "Shares r/ProgrammerHumour meme every 2 hours.",
  execute(bot, discord, msTime) {
    const grab_meme = async (subreddit) => {
      const api = `https://www.reddit.com/r/${subreddit}/random/.json`
      return await axios.get(api).then((response) => {
        const data = response.data;

        const data_json = {
          title: data[0].data.children[0].data.title,
          author: data[0].data.children[0].data.author,
          media_url: data[0].data.children[0].data.url
        }

        return data_json;
      })
    }

    setInterval(() => {
      grab_meme("ProgrammerHumour").then((meme) => {
        let memeChannelId = "874151537029554267";
        let guildId = "832562914174959676";
        let memeChannel = bot.guilds.cache.get(guildId).channels.cache.get(memeChannelId)

        const mediaFile = new discord.MessageAttachment(meme.media_url);

        // console.log(`${meme.media_url}`)
        memeChannel.send(meme.media_url);
        // memeChannel.send(`**Title:** ${meme.title}\n**Author:** ${meme.author}`, { files: [mediaFile] });
        
      }).catch((e) => {
        console.log(e);
      });

    }, msTime)
    
    // setInterval(() => {

    // }, 1000 * 60 * 60 * 2)
  }
}