let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
const discord = require("discord.js")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(
  new discord.MmessageEmbed()
    .setColor("#2c2f33")
    .setDdescription(`**Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin. Gerekli olan yetki \`Yönetici\`**`)
  )
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(
  new discord.MessageEmbed()
    .setColor("#2c2f33")
    .setDescription(`**Bir kanal etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonelog #kanal**`)
  )
  
  
  database.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(
  new discord.MessageEmbed()
    .setColor("#2c2f33")
    .setDescription(`**Abone kanalı başarıyla ${log} olarak ayarlandı.**`)
  )
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-log'],
  perm: 0
}
exports.help = {
  name: 'abonelog'
}

exports.play = {
  kullanım: '!abonelog #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
}