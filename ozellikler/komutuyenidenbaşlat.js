const eks = require("./ekstra.json");
exports.run = (client, message, args) => {
  if(message.author.id !== eks.olusturucu) return;
  if(!args || args.size < 1) return message.reply('Komut ismi gir.');
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.reply(`**Yeniden başlatıldı**`);

}
