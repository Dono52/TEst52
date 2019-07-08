const Discord = require("discord.js");
const botconfig = require("../server.js");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(args[0] == "help"){
      message.reply("Comment l'utiliser : w!report <@mention> <raison>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor('RANDOM')
    .addField("Membre Report :", `${rUser} ID: ${rUser.id}`)
    .addField("Auteur du Report :", `${message.author} ID: ${message.author.id}`)
    .addField("Salons :", message.channel)
    .addField("Temps :", message.createdAt)
    .addField("Raison :", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Impossible de trouver le salons des reports. \n \nCréer le en le nommant `reports`");
    reportschannel.send(reportEmbed);

  message.channel.send('Votre report a bien été envoyer au staff.').then(msg => {msg.delete(5000)});
  
}

module.exports.help = {
  name: "report"
}