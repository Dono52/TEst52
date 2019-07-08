const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.delete();

  let helpEmbed = new Discord.RichEmbed()
  .setTitle("Wally - Mon staff")
  .setColor("RANDOM")
  .setDescription("[Rejoindre le support](https://discord.gg/VekRQXM)")
  .addBlankField()
  .addField("Manager & Créateur :", "`Unknown™#5537`")
  .addField("Gérant Support :", "`[FBD] Romain#6771`")
  .addField("Support :", "`Recherche...`")
  .setTimestamp()

  message.channel.send(helpEmbed)

}

module.exports.help = {
  name: "staff"
}