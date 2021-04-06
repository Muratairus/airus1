const Discord = require("discord.js");
const talkedRecently = new Set();
const ayarlar = require("../ayarlar.json");
const db = require('quick.db');

exports.run = async (client, message, args) => {

 let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = "a?";

if (!message.member.hasPermission("MANAGE_MESSAGES")) 
    return message.channel.send(
      new Discord.MessageEmbed()
     .setColor("#2c2f33")
        .setDescription(
          `• \`${prefix}sil\`Kullanabilmek için , \`Mesajları Yönet\` **Yetkisine sahip olmanız gerekir**.`
        )
    );
       if (talkedRecently.has(message.author.id)) {
           return message.channel.send(
new Discord.MessageEmbed()
    .setTimestamp()
    .setColor('#2c2f33')
    .setDescription(`Bu Özelliği __10__ Saniyede Bir Kullanabilirsin!`)).then(msg => msg.delete({ timeout: 7000 })); 
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          talkedRecently.delete(message.author.id);
        }, 10000);
    }
if(!args[0]) return message.channel.send(
new Discord.MessageEmbed()
    .setTimestamp()
    .setColor('#2c2f33')
    .setDescription(`Lütfen __1__-__99__ Arası Sayı Girin!`));
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`>  ** ${message.author} ${args[0]} Adet __*Mesaj*__ Başarıyla Uzaya Fırlatıldı!** `).then(msg => msg.delete({ timeout: 8000 }));
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['purge','clear','temizle'],
  permLevel: 0
};
exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil'
};