const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async(client, message, args) => {
  
  var botOwnerID = "828716208353312808"
  
let type = args.slice(0).join(' ');
if (type.length < 1) {
  
const embed = new Discord.MessageEmbed()

.setColor('#2c2f33')
.setDescription('Doğru Kullanım : a?öneri <isteğiniz>')

return message.channel.send(embed)
}

const embed = new Discord.MessageEmbed()

.setColor('#2c2f33')
.setDescription('Öneriniz Başarıyla Bildirildi.\nEn Yakın Zamanda incelenecektir!')

message.channel.send(embed)
  
const embed2 = new Discord.MessageEmbed()

.setColor("#2c2f33")

.setDescription(`**<@${message.author.id}> Adlı Kullanıcının İsteği **`)
.addField("**<a:714509467105886390:822783702484254771> Gönderilen İstek/Tavsiye Mesajı**", type)
.setThumbnail(message.author.avatarURL)

client.channels.cache.get(botOwnerID).send(embed2); 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["istek-bildir","istekbildir"],
    permLevel: 0
}

exports.help = {
    name: 'öneri',
    description: 'isteğinizi belirtilen kanala bildirir.',
    usage: 'istek'
}

