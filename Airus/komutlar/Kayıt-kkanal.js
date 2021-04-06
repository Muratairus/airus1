const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
  new discord.MessageEmbed()
    .setColor("#2c2f33")
    .setDescription(`**Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın**`)
  );

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()  
.setColor('#2c2f33')
.setDescription(`**Kayıt Olunacak Kanal Başarıyla Sıfırlandı ! **`)
message.channel.send(sıfırlandı)
db.delete(`kayıtkanal_${message.guild.id}`)
return;
}

let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new discord.MessageEmbed()
.setColor('#2c2f33')
.setDescription(`**Kayıt Olunacak Kanalı Belirtiniz !  **`)
message.channel.send(ayarlanmadı)
}
db.set(`kayıtkanal_${message.guild.id}`, kanal.id)
const ayarlandı = new discord.MessageEmbed() 
.setColor('#2c2f33')
.setDescription(`**Kayıt Olunacak Kanal ${kanal} Olarak Ayarlandı ! **`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtkanal', 'kkanal', 'k-kanal'],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-kanal',
  description: 'Kayıt Olunacak Kanalı Ayarlar',
  usage: '!kayıt-kanal #kanal'
}