const Discord = require('discord.js')
const data = require('quick.db')
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
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
let prefix = 'a?'// botun prefixi

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**Yetkin yok.**`)
)
if(!args[0]) return message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(` \`\`\`- Sistemi kullanmak için, a?uyarı ekle/sil/bilgi komutlarını kullanın.\`\`\` \n\n \`\`\`a?uyarı ekle @Kişi (Sebep)\`\`\`\n **Belirttiğiniz Kişiye Uyarı Ekler. **\n\n\`\`\`a?uyarı sil @Kişi (Adet)\`\`\`\n **Belirttiğiniz Kişinin Uyarısını Siler. **\n\n\`\`\`a?uyarı bilgi (@Kişi)\`\`\`\n **Belirttiğiniz Kişinin Uyarısını Bilgi Verir. **`)
)


if(args[0] === 'ekle') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**Bir kişiyi etiketlemelisin.**`)
)
if(!kullanıcı) return message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**${args[1]}, kullanıcısını sunucuda bulamıyorum.**`)
)
if(kullanıcı.bot) return message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**Botları uyaramam.**`)
)
if(kullanıcı.id === message.author.id) return message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**Kendini uyaramazsın.**`)
)
let reason = args.slice(2).join(' ')

data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, +1)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

if(!reason) {
await message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**${kullanıcı}, uyarıldı!\nToplam uyarı sayısı: ${syı}**`)
)
await kullanıcı.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**${kullanıcı}, Merhaba Ben **${message.guild.name}** Sunucusunda Bir Botum Ve Beni **Seni Uyarmam** İçin Gönderdiler.\n\n <a:__:822783673802686504> Neden Uyarıldığını Bilmiyorum Ama Sen Yinede Dikkatli ol !**`)
) 
return}

if(reason) {
await message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**${kullanıcı}, uyarıldı!\nToplam uyarı sayısı: ${syı}**`)
)
await kullanıcı.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**${kullanıcı}, Merhaba Ben **${message.guild.name}** Sunucusunda Bir Botum Ve Beni **Seni Uyarmam** İçin Gönderdiler.\n\n <a:__:822783673802686504> **${reason}** Sebebiyle Uyarıldın. Dikkatli ol !** `)
) 
return} }

if(args[0] === 'sil') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDesciption(`**Bir kişiyi etiketlemelisin.**`)
)
if(!kullanıcı) return message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**${args[1]}, kullanıcısını sunucuda bulamıyorum.**`)
)
if(kullanıcı.id === message.author.id) return message.channel.send(`Kendini uyaramazsın.`)

let sayı = args[2]
if(!sayı) return message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**Silinecek uyarı sayısını yazmadın!**`)
)
if(isNaN(sayı)) return message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**Silinecek uyarı sayısını yazmadın!**`)
)
if(sayı === '0') return message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**Beni mi kandırmaya çalışıyorsun sen? ;(**`)
)
const syı2 = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
if(syı2 < sayı) return message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**${kullanıcı}, kullanıcısının uyarı sayısı: ${syı2}! Sadece bu kadar silebilirsin.**`)
)

data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, -sayı)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
await message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**${kullanıcı}, uyarısı silindi!\nToplam uyarı sayısı: ${syı ? syı : '0'}**`)
)
await kullanıcı.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**${kullanıcı}, Merhaba! **${message.guild.name}** Sunucusunda **Uyarın Silindi**. Hadi İyisin Yine <a:yeah_giveaway:802214014456823838>**`)
) }

if(args[0] === 'bilgi') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**Bir kişiyi etiketlemelisin.**`)
)
if(!kullanıcı) return message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**${args[1]}, kullanıcısını sunucuda bulamıyorum.**`)
)

const syı2 = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
if(!syı2) return message.channel.send(
new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**${kullanıcı}, kullanıcısının hiç uyarısı yok.**`)
)
await message.channel.send(
new Discord.MessageEmbed()
  .setColor("")
  .setDescription(`**${kullanıcı}\n**Toplam uyarı sayısı:** ${syı2 ? syı2 : '0'}**`)
) }
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['warn'],
permLevel: 0,
}

exports.help = {
name: 'uyarı'
}