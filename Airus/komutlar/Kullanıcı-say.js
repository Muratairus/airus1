const Discord = require("discord.js");
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
require('moment-duration-format')
exports.run = async (client, message, args) => {
    const voiceChannels = message.guild.channels.cache.filter(
    c => c.type === "voice"
 );

     /////////////////////////
let gecen = new Date().getTime() - message.guild.createdAt.getTime()
let haha = moment.duration(gecen).format('D [Gün, ] h [Saat, ] m [Dakika,] s [Saniye Önce]')
    //////////////////////////
let rahatsız = 
        message.guild.members.cache.filter(dnd => dnd.presence.status === "dnd")
          .size
let bosta = 
        message.guild.members.cache.filter(idle => idle.presence.status === "idle")
          .size
  let gorunmez = 
      message.guild.members.cache.filter(
      offline => offline.presence.status === "offline"
     ).size
  let ses =
              message.guild.channels.cache.filter(chan => chan.type === "voice").size
      
    //////////////////////////
  
  let roller = message.guild.roles.cache.size
  let emoji = message.guild.emojis.cache.size


    let botlar = message.guild.members.cache.filter(m => m.user.bot).size
  
    let duyuru =
              message.guild.channels.cache.filter(chan => chan.type === "text").size
      
        let news =
              message.guild.channels.cache.filter(chan => chan.type === "news").size
      
  let cotegory = message.guild.channels.cache.filter(chan => chan.type === "category").size
     
  /////
    let guild = message.guild;
    /////////////////////////
    let aktifsayısı = message.guild.members.cache.filter(
    m => !m.user.bot && m.user.presence.status !== "offline"
  ).size;
  const sunucubilgi = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor("#2c2f33")
    .setThumbnail(message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setDescription(`
<:statu:798915986165202945> | **Sunucu Bilgileri**
**Adı :** ${guild.name}
**ID :** ${message.guild.id}
**Kurulum :** ${haha}
**Sahibi :** ${message.guild.owner ? message.guild.owner : "**Hata**"}

<:community:800623274324656158> | **Kullanıcı Bilgileri**
<:community:800623274324656158> Toplam Üye Sayısı : **${message.guild.memberCount}**
<:online:800782196675051552> Aktif Sayısı : **${aktifsayısı}**
<:invisible:800782257848844369> Kapalı Sayısı : **${gorunmez}**
<:idle:800782218187898880> Boşta Sayısı : **${bosta}**
<:dnd:800782237653532713> Rahatsız Etmeyin Sayısı : **${rahatsız}**
<:bot:798916086992338996> Toplam Bot Sayısı : **${botlar}**

<:visual:798915882553966653> | **Kanal Bilgileri**
<:voicechannles:800474841550815293> Sesli Kanal Sayısı : **${ses}**
<:channel:799749664248430602> Normal Kanal Sayısı : **${duyuru}**
<:public:800770182943211561> Duyuru Kanal Sayısı : **${news}**
<:arrow:798915916984746024> Kategorü Sayısı : **${cotegory}**
<:arrow:798915916984746024> Rol Sayısı : **${roller}**
<:arrow:798915916984746024> Emoji Sayısı : **${emoji}**
<a:NitroBoost:826721203296141322> Boost Sayısı : **${message.guild.premiumTier}**
    `);

  message.channel.send(sunucubilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sb","sunucu-bilgi"],
  permLevel: 0
};

exports.help = {
  name: "sunucubilgi",
  description: "",
  usage: ""
};
