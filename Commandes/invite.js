const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.delete();

  let helpEmbed = new Discord.RichEmbed()
  .setTitle("Wally - M'ajouter")
  .setColor("RANDOM")
  .setDescription("Menu d'invitations")
  .addBlankField()
  .addField("Pour me mettre sur ton discord :", "[Cliquez-ici](https://discordapp.com/oauth2/authorize?client_id=597574445518815272&scope=bot&permissions=2146958847)")
  .setFooter("Wally le Futuriste accepte votre invitation :D")
  .setTimestamp()

  message.author.send(helpEmbed)
  
      message.channel.send("Le liens pour m'ajouter vous a été envoyez en privée ! :)").then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "invite"
}