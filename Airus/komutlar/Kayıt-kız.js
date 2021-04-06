const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let kızrol = db.fetch(`kızrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)
  
if(!kanal || !alınacakrol || !kızrol || !kayıtçı)
	return message.channel.send(
  new discord.MessageEmbed()
    .setColor("#2c2f33")
    .setDescription((`${message.author}, **Üzgünüm Ama , __Kadın Kayıt__ Etmek İçin \`Tüm Sistemlerin\` Aktif Olması Gerek**`).then(msg => msg.delete({ timeout: 5000 }))))

if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(
new discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip olman Lazım !**`)
)
  if(message.channel.id !== kanal) return message.channel.send(
  new discord.MessageEmbed()
    .setColor("#2c2f33")
    .setDescription(`**Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin !**`)
  )
  if (!kızrol) return message.channel.send(
  new discord.MessageEmbed()
    .setColor("#2c2f33")
    .setDescription(`**Sunucuda Kız Rolü Ayarlanmadığı İçin Komut Kullanılamaz !**`)
  )

let member = message.mentions.members.first();
if (!member) return message.channel.send(
new discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**Kız Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin !**`) 
)
let isim = args[1]
if (!isim) return message.channel.send(
new discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**İsmini Belirtmelisin !**`)
)
let yaş = args[2]
if (!yaş) return message.channel.send(
new discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**Yaşını Belirtmelisin !**`)
)
member.setNickname(`${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(kızrol) 

const başarılı = new discord.MessageEmbed()
.setColor('#2c2f33')
.setTitle(`KAYIT BAŞARILI`)
.setFooter(`Toplamda ${kayıtsayı} teyitin oldu | a?davet Sunucuna davet et`)
/*.addField('Kullanıcının İsmi',`${isim}`)
.addField('Kullanıcının Yaşı',`${yaş}`)
kayıt eden yetkili <@!${message.author.id}>
kayıt Edilen Kullanıcı ${member} 
*/
.setDescription(`
<a:3456789098765432:826456047706570793>**・<@!${message.author.id}> ** **kayıt yaptı, adam ilerliyo corç!**

<:NormalEmojiM3L1H258:827201230971207733>**・Kayıt Edilen Kullanıcı:** ${member}

<a:EmojiGifM3L1H18:826787475740557342>**・${member} Kullanıcısının İsmini** \`${isim} | ${yaş}\` **Olarak Değiştirdim.**

`)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['k'],
  permlevel: 0
}
exports.help = {
  name: 'kız',
  description: 'erkek olarak kayıt eder',
  usage: '!erkek @kullanıcı isim yaş'
}