const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async(client, message, args) => {
  
  var botOwnerID = "828716171363876865"
  
let type = args.slice(0).join(' ');
if (type.length < 1) {
  
const embed = new Discord.MessageEmbed()

.setColor('#2c2f33')
.setDescription('Doğru Kullanım : a?hata-bildir <hata-bildir>')

return message.channel.send(embed)
}

const embed = new Discord.MessageEmbed()

.setColor('#2c2f33')
.setDescription('Hatanız Başarıyla Bildirildi.\nEn Yakın Zamanda incelenecektir!')

message.channel.send(embed)
  
const embed2 = new Discord.MessageEmbed()

.setColor("#2c2f33")

.setDescription(`**<@${message.author.id}> Adlı Kullanıcının Hata Başvurusu **`)
.addField("**<a:714509467105886390:822783702484254771> Gönderilen Hata Mesajı**", type)
.setThumbnail(message.author.avatarURL)

client.channels.cache.get(botOwnerID).send(embed2); 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["hata-bildir"],
    permLevel: 0
}

exports.help = {
    name: 'hata',
    description: 'isteğinizi belirtilen kanala bildirir.',
    usage: 'istek'
}

