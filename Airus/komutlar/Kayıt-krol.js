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
.setDescription(`Sunucu İçin Ayarladığınız Kayıtçı Rol Başarıyla Sıfırlandı ! `)
message.channel.send(sıfırlandı)
db.delete(`kayıtçırol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed() 
.setColor('#2c2f33')
.setDescription(`**Ayarlayacağınız Kayıtçı Rolü Belirtiniz !**`)
message.channel.send(ayarlanmadı)
}
db.set(`kayıtçırol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed() 
.setColor('#2c2f33')
.setDescription(`**Kayıt Edecek Rol Başarıyla ${rol} Olarak Ayarlandı !**`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtçırol', 'kayıtçı'],
  permlevel: 0
}
exports.help = {
  name: 'kayıtçı-rol',
  description: 'kız rolünü ayarlar',
  usage: '!kız-rol @rol'
}