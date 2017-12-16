exports.run = (bot, message) => {
    let bebek = message.content.split(" ").slice(1);
		message.channel.sendMessage("**Sonuç bulundu** <https://github.com/" + bebek[0] + "/>")
};
