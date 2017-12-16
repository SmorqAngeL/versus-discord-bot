const Discord = require("discord.js");

exports.run = (client, message, args) => {
  message.reply((process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+" MB Kullanılıyor...");
}