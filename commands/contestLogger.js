const axios = require("axios");

module.exports = {
  name: "contestLogger",
  type: "application",
  description: "Logs the CodeForces contests and share that.",
  execute(message, discord) {
    const hexArr = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];

    const pickRandHex = () => {
      let r = Math.floor(Math.random() * hexArr.length);
      return hexArr[r];
    }

    // console.log(pickRandHex());

    const api = "https://kontests.net/api/v1/codeforces";

    axios.get(api).then(res => {
      return res.data;
    }).then(contests => {
      let count = 0;

      contests.forEach(contest => {
        count++;

        let c1 = pickRandHex();
        let c2 = pickRandHex();
        let c3 = pickRandHex();
        let c4 = pickRandHex();
        let c5 = pickRandHex();
        let c6 = pickRandHex();

        const contestEmbed = new discord.MessageEmbed()
          .setColor(`#${c1}${c2}${c3}${c4}${c5}${c6}`)
          .setTitle(`কনটেস্ট ${count}#`)
          .setURL(contest.url)
          .addFields(
            {name: "নাম:", value: contest.name},
            {name: "শুরু হবার সময়:", value: new Date(contest.start_time).toLocaleString('en-UK', { timeZone: 'Asia/Dhaka' }), inline: true},
            {name: "শেষ হবার সময়:", value: new Date(contest.end_time).toLocaleString('en-UK', { timeZone: 'Asia/Dhaka' }), inline: true},
            {name: "সময়কাল:", value: `${contest.duration / 3600} ঘণ্টা`},
            {name: "নিবন্ধীকরণ লিংক:", value: contest.url},
          )
          .setImage("https://gifimage.net/wp-content/uploads/2017/10/coding-gif-8.gif")
          .setFooter("Source: KONTESTS | CodeForces")
          .setTimestamp()
        
        message.channel.send({embed: contestEmbed});
      });
    });
  },
}