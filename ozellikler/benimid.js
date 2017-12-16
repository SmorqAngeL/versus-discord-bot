const Discord = require('discord.js');
exports.run = (client, message, args) => {
message.channel.send("ID'n:" + message.author.id)
}