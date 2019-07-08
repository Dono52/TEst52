const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Information du Bot")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nom du bot", bot.user.username)
    .addField("Créer le", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}