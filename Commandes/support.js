const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.delete();

  let helpEmbed = new Discord.RichEmbed()
  .setTitle("Wally - Me rejoindre")
  .setColor("RANDOM")
  .setDescription("Menu Support")
  .addBlankField()
  .addField("Vous pouvez rejoindre le support ici pour nous informer des problèmes du robot :", "[Cliquez-ici](https://discord.gg/VekRQXM)")
  .setFooter("Wally le Futuriste vous invite dans le support :P")
  .setTimestamp()

  message.author.send(helpEmbed)
  
      message.channel.send("Le support vous a été envoyez en privée :)").then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "support"
}