const Discord = require("discord.js");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tutorial', {
  useNewUrlParser: true
});
const Coins = require("../models/coins.js");
module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  await message.delete();
  if (message.author.id !== '466283855213494292') return;
  //?deluser @tag
  let member = message.mentions.members.first();
  if (!member) return message.reply("oof");

  Coins.findOneAndDelete({
    userID: member.id,
    serverID: message.guild.id
  }, (err, res) => {
    if(err) console.log(err)
    console.log("Le membre avec l'id " + member.id + " à été supprimé de la base de donnée de wCoins.");
  });

}
//name this whatever the command name is.
module.exports.help = {
  name: "deluser"
}