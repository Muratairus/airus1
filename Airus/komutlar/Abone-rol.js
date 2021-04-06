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
    .setDescription(`**Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonerol @rol**`)
  )
  
  
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`Abone rolü başarıyla ${rol} olarak ayarlandı.`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-rol'],
  perm: 0
}
exports.help = {
  name: 'abonerol'
}

exports.play = {
  kullanım: '!abonerol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}