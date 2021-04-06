const Discord = require('discord.js');
const a = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = "a?";
  
  let cfxistek = await db.fetch(`istekkanal${message.guild.id}`)
  let cfxistekkanal = message.mentions.channels.first();
  
  const cfx1 = new Discord.MessageEmbed()
  .setDescription(`**İstek Kanalı ${cfxistekkanal} olarak ayarlandı.**`)
  .setColor("#2c2f33")
  .setFooter(`Λirus | İstek Kanal Sistemi.`, client.user.avatarURL());
  const cfx2 = new Discord.MessageEmbed()
  .setDescription(`**İstek Kanalı Kapatıldı.**`)
  .setColor("#2c2f33")
  .setFooter(`Λirus | İstek Kanal Sistemi.`, client.user.avatarURL());
  const cfxembed = new Discord.MessageEmbed()
  .setTitle(`**\`İstek-Kanal Bilgi;\`**`)
  .setDescription(`** ** \n**Ayarlamak İçin:** \`${prefix}istek-kanal ayarla #kanal\`\n\n **Kapatmak İçin:** \`${prefix}istek-kanal kapat\``)
  .setColor("#2c2f33")
  .setFooter(`Λirus | İstek Kanal Sistemi.`, client.user.avatarURL());
  
  
  if (!args[0]) return message.channel.send(cfxembed)
  
  if (args[0] == cfxistekkanal) return db.set(`istekkanal${message.guild.id}`, cfxistekkanal.id) - message.channel.send(cfx1);
    

  if (args[0] == 'ayarla') {
    
    db.set(`istekkanal${message.guild.id}`, cfxistekkanal.id)
    message.channel.send(cfx1)
    
    
  }
  
  if (args[0] == 'kapat') {
    
    db.delete(`istekkanal${message.guild.id}`)
    message.channel.send(cfx2)
    
  }
  
  
};

// CodeFENIX // CFX
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['ikanal'],
  permLevel: 0 
};

exports.help = {
  name: 'istek-kanal',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'istek-kanal #kanal'
};