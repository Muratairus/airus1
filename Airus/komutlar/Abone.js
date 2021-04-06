let Discord = require("discord.js")
let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
const discord = require("discord.js")


exports.run = async(client, message, args) => {
let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)
let abonelog = await database.fetch(`abonelog.${message.guild.id}`)
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
  let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!abonerol) return message.channel.send(
new discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**Abone rolü ayarlanmamış!**`)
)
  if(!abonelog) return message.channel.send(
  new discord.MessageEmbed()
    .setColor("#2c2f33")
    .setDescription(`**Abone log kanalı ayarlanmamış!**`)
  )
  if(!aboneyetkilisi) return message.channel.send(
  new discord.MessageEmbed()
    .setColor("#2c2f33")
    .setDescription(`**Abone yetkili rolü ayarlanmamış!**`)
  )
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(
  new discord.MessageEmbed()
    .setColor("#2c2f33")
    .setDescription(`**Bu komutu kullanabilmek için <@${aboneyetkilisi}> yetkisine sahip değilsin.**`)
  )
  
  if(!message.mentions.users.first()) return message.channel.send(`Bir Üye Etiketle!`)
  
  await(abonekisi.roles.add(abonerol))
  const embed = new Discord.MessageEmbed()
  .setTitle(`BAŞARILI`)
  .setDdescription(`
  <a:714509467105886390:822783702484254771> **Abone Rolünü Veren Kişi:** ${message.author.tag}
  
  <a:714509467105886390:822783702484254771> **Abone Rolü Verilen Kişi:** \`${user}\`
  `)
  .setColor(`#2c2f33`)
  .setImage(`https://cdn.discordapp.com/attachments/826088751104524340/826845000516108339/standard_3.gif`)
  .setFooter(`${client.user.username} Abone Sistemi`)
  message.guild.channels.cache.get(abonelog).send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone','a'],
  perm: 0
}
exports.help = {
  name: 'a'
}

exports.play = {
  kullanım: '!abone-y-rol @rol',
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',
  kategori: 'Abone'
}

