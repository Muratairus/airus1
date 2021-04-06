const Discord = require('discord.js');
const db = require('quick.db');
const a = require('../ayarlar.json') 
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
                     if (talkedRecently.has(message.author.id)) {
           return message.reply("``Komutu 5 Saniye Aralıklarla Kullanabilirsin.``");
    } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 0);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
  let user = message.author
    
  const cfx1 = new Discord.MessageEmbed()
  .setDescription(`**İstek Kanalı Ayarlanmamış!** \n\n **Ayarlamak İçin:** \a?istek-kanal ayarla #kanal\``)
  .setColor("#2c2f33")
  .setFooter(`Λirus | İstek Sistemi.`, client.user.avatarURL());
  const cfx2 = new Discord.MessageEmbed()
  .setDescription(`\`${user.tag}\` Lütfen isteğinizi belirtin.`)
  .setColor("#2c2f33")
  .setFooter(`Λirus| İstek Sistemi.`, client.user.avatarURL());
  const cfx3 = new Discord.MessageEmbed()
  .setDescription(`\`${user.tag}\` İsteğinin Gönderilmesini istiyorsan \`istiyorum\` yazman gerekiyor.`)
  .setColor("##2c2f33")
  .setFooter(`Λirus | İstek Sistemi.`, client.user.avatarURL());
  const cfx4 = new Discord.MessageEmbed()
  .setDescription(`\`${user.tag}\` İsteğin bildirildi!`)
  .setColor("#2c2f33")
  .setFooter(`Λirus | İstek Sistemi.`, client.user.avatarURL());
  
  
    let cfxistekkanal = await db.fetch(`istekkanal${message.guild.id}`)
    let code = args.slice(0).join(' ');
    if (!cfxistekkanal) return message.channel.send(cfx1)
    if (code.length < 1) return message.channel.send(cfx2);
  if (message.author) {
message.channel.send(cfx3)
//CodeFENIX // CFX
.then(() => {
message.channel.awaitMessages(response =>response.content ==='istiyorum', {
max: 1,
time: 30000,
errors: ['time'],
})

.then((collected) => {
message.channel.send(cfx4)
//CodeFENIX //CFX
const cfx = new Discord.MessageEmbed()
.setColor("#2c2f33")
.addField(`Kullanıcı Adı`,message.author.username,true)
.addField(`Kullanıcı ID`,message.author.id,true)
.addField(`Kullanıcı Tagı`,message.author.discriminator,true)
.addField("İstek", code)
.setThumbnail(message.author.avatarURL());
client.channels.cache.get(cfxistekkanal).send(cfx)
});
});
}};

// CodeFENIX // CFX
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'istek',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'istek <istediğiniz>'
};
