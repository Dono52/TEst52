module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: `${client.guilds.size} Serveurs | w!help | ${client.users.size} Membres`
        }
    });
};