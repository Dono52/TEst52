
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.delete()

message.guild.createChannel(`ticket-${message.author.username}`, 'channel', [

  {
		id: message.guild.defaultRole.id,
		deny: ['VIEW_CHANNEL'],
	},
	{
		id: message.author.id,
		allow: ['VIEW_CHANNEL'],
	},
]);
  
  message.channel.send("Votre ticket a bien été envoyer, un salons à été créer").then(msg => {msg.delete(10000)});
}

module.exports.help = {
  name: "new"
}
