const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const moment = require("moment");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  
moment.locale('tr')

let prefix = await db.fetch(`prefix_${message.guild.id}`);
if (prefix == null) prefix = `${ayarlar.prefix}`;

  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setDescription(`
   <a:eqwtreter:822783674814693376> **Λirus BOT v2** <a:eqwtreter:822783674814693376>
    
**Bu Sunucudaki Prefixim:** \`${prefix}\`

<a:714509467105886390:826721207659135036> **Moderasyon** 
[\`a?yardım moderasyon\`](https://discord.gg/deTsfXDYym)
<a:714509467105886390:826721207659135036> **Register V3** 
[\`a?yardım register\`](https://discord.gg/deTsfXDYym)
<a:714509467105886390:826721207659135036> **Koruma**
[\`a?yardım koruma\`](https://discord.gg/deTsfXDYym)
<a:714509467105886390:826721207659135036> **Abone**
[\`a?yardım abone\`](https://discord.gg/deTsfXDYym)

**Bilgi:** *Botumuzda Yazı Hatası Komut Hatası Görürseniz a?hata-bildir <hatanız> yazaraktan bize ulaşabilirsiniz*

[\`Sunucuna Davet Et\`](https://discord.com/oauth2/authorize?client_id=800057438731632640&scope=bot&permissions=8)
[\`Destek Sunucusu\`](https://discord.gg/deTsfXDYym)
[\`Web Sitemiz\`](https://www.airus.cf)
`)

    .setColor('#2c2f33')
    .setImage(`https://cdn.discordapp.com/attachments/826088751104524340/826845000516108339/standard_3.gif`)
    .setFooter(`Sorgulayan : ${message.author.tag} | Tarih :  ${moment().format("MM MMMM YYYY dddd")}`, message.author.avatarURL({ dynamic: true, format: "png", size: 1024 }))
     message.channel.send(embed)
  }

if (args[0] === "koruma" || args[0] === "guard") {
      const bot = new Discord.MessageEmbed()
      .setDescription(`
      
<a:eqwtreter:822783674814693376> **Λirus BOT v2** <a:eqwtreter:822783674814693376>
    
**Bu Sunucudaki Prefixim:** \`${prefix}\`

<a:714509467105886390:822783702484254771> **a?küfür-engel aç/kapat**
*Küfür Engel Sistemini Aktif Edebilirsiniz*
<a:714509467105886390:822783702484254771> **a?reklam-engel aç/kapat**
*Reklam Engel Sistemini Aktif Edebilirsiniz*

Öneriniz Varsa a?öneri <öneriniz>
Komut Hatası Yazı Hatası Bulduysanız a?hata-bildir <hatanız>

      
      `)
      .setColor('#2c2f33')
      .setImage(`https://cdn.discordapp.com/attachments/826088751104524340/826845000516108339/standard_3.gif`)
      .setFooter(`Sorgulayan : ${message.author.tag} | Tarih :  ${moment().format("MM MMMM YYYY dddd")}`, message.author.avatarURL({ dynamic: true, format: "png", size: 1024 }))
       message.channel.send(bot)

    }

if (args[0] === "register" || args[0] === "kayıt") {
      const sahip = new Discord.MessageEmbed()
      .setDescription(`
      
<a:eqwtreter:822783674814693376> **Λirus BOT v2** <a:eqwtreter:822783674814693376>
    
**Bu Sunucudaki Prefixim:** \`${prefix}\`

<a:714509467105886390:822783702484254771> **a?kayıtsızrol**
*Alınacak Rol UnRegister Gibi*
<a:714509467105886390:822783702484254771> **a?erkekrol**
*Erkek Rolünü Ayarlıyabilirsiniz*
<a:714509467105886390:822783702484254771> **a?kayıtkanalı**
*Kayıt Kanalını Ayarlıyabilirsiniz*
<a:714509467105886390:822783702484254771> **a?kayıtçırol**
*Kayıtçı Rolünü Ayarlıya Bilirsiniz*
<a:714509467105886390:822783702484254771> **a?kadınrol**
*Kız Rolünü Ayarlıyabilirsiniz*
<a:714509467105886390:822783702484254771> **a?oto-isim-sıfırla/ayarla**
*Oto İsim Ekliye Bilirsiniz*
<a:714509467105886390:822783702484254771> **a?erkek**
*Erkek Olarak Kayıt Eder*
<a:714509467105886390:822783702484254771> **a?kadın**
*Kız Olarak Kayıt Eder*

Öneriniz Varsa a?öneri <öneriniz>
Komut Hatası Yazı Hatası Bulduysanız a?hata-bildir <hatanız>
      
      `)
      .setColor('#2c2f33')
      .setImage(`https://cdn.discordapp.com/attachments/826088751104524340/826845000516108339/standard_3.gif`)
      .setFooter(`Sorgulayan : ${message.author.tag} | Tarih :  ${moment().format("MM MMMM YYYY dddd")}`, message.author.avatarURL({ dynamic: true, format: "png", size: 1024 }))
       message.channel.send(sahip)

    }
   
    if (args[0] === "moderasyon" || args[0] === "mod") {
      const fun = new Discord.MessageEmbed()
      .setDescription(`
<a:eqwtreter:822783674814693376> **Λirus BOT v2** <a:eqwtreter:822783674814693376>
    
**Bu Sunucudaki Prefixim:** \`${prefix}\`

<a:714509467105886390:822783702484254771> **a?force-ban**
*Kullanıcıya Sınırsız Ban Atabilirsiniz*
<a:714509467105886390:822783702484254771> **a?oto-rol-ayarla/kapat**
*OtoRol Sistemin Aktif Edebilirsiniz*
<a:714509467105886390:822783702484254771> **a?prefix-ayarla/sıfırla**
*Sunucuya Özel Prefix Ayarlıya Bilirsiniz*
<a:714509467105886390:822783702484254771> **a?sa-as aç/kapat**
*Sa As Sistemini Açabilirsiniz*
<a:714509467105886390:822783702484254771> **a?sayaç**
*Sayaç Sistemini Ayrlıya Bilirsiniz*
<a:714509467105886390:822783702484254771> **a?sohbet-aç/kapat**
*Sohbeti Açıp Kapatabilirsiniz*
<a:714509467105886390:822783702484254771> **a?sil**
*Sohbeti Silebilirsiniz 1-99*
<a:714509467105886390:822783702484254771> **a?unban**
*Kullanıcının Yasağını Kaldırabilirsiniz*
<a:714509467105886390:822783702484254771> **a?yavaş-mod**
*Sohbeti Yavaş Moda Alabilirsiniz*
<a:714509467105886390:822783702484254771> **a?uyarı**
*Kullanıcıya Uyarı Atabilirsiniz a?uyarı Yazaraktan Daha Fazla Bilgi Alabilirsiniz*
<a:714509467105886390:822783702484254771> **a?istek-kanal**
*İstek Kanalı Ayarlıya Bilirsin*
<a:714509467105886390:822783702484254771> **a?istek**
*İstek Kanalına yetkilere ulaşacak ileti gönderebilirsiniz*

Öneriniz Varsa a?öneri <öneriniz>
Komut Hatası Yazı Hatası Bulduysanız a?hata-bildir <hatanız>

      `)
      .setColor('#2c2f33')
      .setImage(`https://cdn.discordapp.com/attachments/826088751104524340/826845000516108339/standard_3.gif`)
      .setFooter(`Sorgulayan : ${message.author.tag} | Tarih :  ${moment().format("MM MMMM YYYY dddd")}`, message.author.avatarURL({ dynamic: true, format: "png", size: 1024 }))
       message.channel.send(fun)
 }
  
  if (args[0] === "abone" || args[0] === "sub") {
      const bot = new Discord.MessageEmbed()
      .setDescription(`
      
<a:eqwtreter:822783674814693376> **Λirus BOT v2** <a:eqwtreter:822783674814693376>
    
**Bu Sunucudaki Prefixim:** \`${prefix}\`

<a:714509467105886390:822783702484254771> **a?abone-log**
*Abone Log Kanalını Ayarlarsınız*
<a:714509467105886390:822783702484254771> **a?abone-rol**
*Abone Rolünü Ayarlarsınız*
<a:714509467105886390:822783702484254771> **a?abone-y-rol**
*Abone Yetkili Rölünü Aayarlarsınız*
<a:714509467105886390:822783702484254771> **a?abone**
*Abone Etiketlediğiniz Kişiye Abone Rolü Verilir*

Öneriniz Varsa a?öneri <öneriniz>
Komut Hatası Yazı Hatası Bulduysanız a?hata-bildir <hatanız>

      
      `)
      .setColor('#2c2f33')
      .setImage(`https://cdn.discordapp.com/attachments/826088751104524340/826845000516108339/standard_3.gif`)
      .setFooter(`Sorgulayan : ${message.author.tag} | Tarih :  ${moment().format("MM MMMM YYYY dddd")}`, message.author.avatarURL({ dynamic: true, format: "png", size: 1024 }))
       message.channel.send(bot)

    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0
};
exports.help = {
  name: 'yardım',
  description: 'Botun Yardım Menüsünü Bir Arada Toplayıp Bilgi Verir.',
  usage: 'yardım'
};