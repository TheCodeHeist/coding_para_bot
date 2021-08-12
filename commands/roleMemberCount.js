module.exports = {
  name: "roleMemberCount",
  type: "utility",
  description: "Counts the number of members having a specific role.",
  execute(message, args){
    // message.channel.send("You're counting members!");

    if (!args[0]) return message.channel.send("**রোল উল্লেখ করুন!**");

    const orderedRole = message.guild.roles.cache.find(role => role.name === args[0]);

    if (!orderedRole) return message.channel.send("**রোল-টি আমার অবগত নয়!**")

    // const countedMembers = message.guild.members.cache.filter(member => member.roles.cache.find(role => role === orderedRole)).map(member => member.user.tag);
    const countedMembers = message.guild.members.cache.filter(member => member.roles.cache.find(role => role === orderedRole)).size

    message.channel.send(`**"${orderedRole.name}" রোল সহ ব্যবহারকারীরা:** ${countedMembers}`);
  }
}