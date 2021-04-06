let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
const discord = require("discord.js")


exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(
  new discord.MmessageEmbed()
    .setColor("#2c2f33")
    .setDescription(`**Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin. Gerekli olan yetki \`Yönetici\`**`)
  )
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(
  new discord.MessageEmbed()
    .setColor("#2c2f33")
    .setDdescription(`**Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abone-y-rol @rol**`)
  )
  
  
  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id)
  message.channel.send(
  new discord.MessageEmbed()
    .setColor("#2c2f33")
    .setDescription(`**Abone yetkilisi başarıyla ${rol} olarak ayarlandı.**`)
  )
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-y-rol'],
  perm: 0
}
exports.help = {
  name: 'abone-yetkili-rol'
}

exports.play = {
  kullanım: '!abone-y-rol @rol',
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',
  kategori: 'Abone'
}