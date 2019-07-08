const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  let helpEmbed = new Discord.RichEmbed()
  .setTitle("Wally - Help")
  .setColor("RANDOM")
  .setDescription("Menu d'aide")
  .addBlankField()
  .addField("👥 - Commandes Membres", "w!help - Voir les commandes \n w!stats <@mention> - Voir les statistiques d'une personnes \n w!report <@mention> <raison> - Reporter une personne \n w!ping - Voir les ms de sa connexion \n w!invite - Invitez le robot \n w!support - Rejoindre Wally dans c'est aventure \n w!staff - Voir le support de moi même :P \n w!serverinfo - Voir les informations du discord \n w!botinfo - Voir les informations de mon système")
  .addBlankField()
  .addField("💰 - Commandes wCoins", "w!coins - Voir c'est coins \n w!pay <@mention> <nombre de coins> - Donnez des coins")
  .addBlankField()
  .addField("🔨 - Commandes Modération", "w!ban <@mention> <raison> - Bannir quelqu'un \n w!kick <@mention> <raison> - Expulser une personne \n w!say <message> - Faire parler le bot \n w!clear <nombre de message> - Supprimer tout les messages \n w!setup - Mettre tout les salons que Wally a besoin")
  .addBlankField()
  .addField("❓ - Commandes Ticket", "w!new - Créer un ticket \n w!close - Fermer le ticket")
  
  
  message.author.send(helpEmbed)
  
      message.channel.send('La listes de commandes vous a été envoyez en privée ! :)').then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "help"
}