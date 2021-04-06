const Discord = require("discord.js");

exports.run = async (client, message, args) => {
if (message.author.id !== message.guild.ownerID)
    return message.channel.send("Bu Komutu Sadece Sunucu Sahibi Kullanabilir!");

  const kimmich = new Discord.MessageEmbed()
  .setColor(`AQUA`)
  .setDescription(`
> Sevgili ${message.author} ,
> 
> \`Bilgi :\` **Eğer, Bu Komutu Doğrularsanız Sunucunuzdaki Bazı Faktörler Sıfırlanacaktır !**
> 
> **__Silinecekler__ ;**
> 1) Kanallar : [\`${message.guild.channels.cache.size}\`](https://discord.gg/deTsfXDYym) Adet ,
> 2) Roller : [\`${message.guild.roles.cache.size - 1}\`](https://discord.gg/deTsfXDYym) Sayısı,
> 
> \`İşlem :\`
> **Onaylamak İçin 👍 , Reddetmek İçin 👎 Tepkisine Tıklayınız**`)
  

  message.channel.send(kimmich).then(msg => {
msg.react('👍').then(() => msg.react('👎'));

const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {

message.guild.channels.cache.map(m => m.delete())
message.guild.roles.cache.forEach(a => a.delete())

		} else {
			message.channel.send(
new Discord.MessageEmbed()
.setColor(`RED`)
.setFooter(client.user.tag, client.user.avatarURL())
.setDescription(`\`${message.author.tag}\`, **__Sunucu__ sıfırlama işlemi iptal edildi.**`));
      msg.delete({timeout:3000})
		}
	})
	.catch(collected => {
		message.channel.send(
new Discord.MessageEmbed()
.setColor('AQUA')
.setFooter(client.user.tag, client.user.avatarURL())
.addField(`__Hata !__`,`\`${message.author.tag}\`, **Bilinmeyen bir hata meydana geldi ! Tekrar deneyiniz**`));
	});
  
})

};
//Walaska Code Share || discord.gg/codes 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-sıfırla"],
  permLevel: 0,
};
//Walaska Code Share || discord.gg/codes 
exports.help = {
  name: "sunucu-kapat",
  description: "Sunucudaki tüm kanalları , tüm emojileri & rolleri siler.",
  usage: "sunucu-sıfırla"
};
//Walaska Code Share || discord.gg/codes 