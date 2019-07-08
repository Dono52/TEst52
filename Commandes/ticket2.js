module.exports.run = async (bot, message, args) => {
    message.delete()
      
      message.author.send("Votre ticket sera fermer par un Staff dès que votre conversation sera terminé.")
      message.channel.send("L'auteur de ce ticket souhaite fermer ce ticket.")
    }
    
    module.exports.help = {
      name: "close"
    }