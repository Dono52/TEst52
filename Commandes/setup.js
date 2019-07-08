

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.delete()

  message.guild.createChannel(`reports`, "channel")
  message.guild.createChannel(`logs`, "channel")
      const muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
  
  message.channel.send("Les salons que Wally a besoin ont bien été créer").then(msg => {msg.delete(10000)});
}

module.exports.help = {
  name: "setup"
}