const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
require("moment-duration-format");
exports.run = async (client, message, args) => {
   if(message.author.id !== "756517457031593995") return
  const duration = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  let aylartoplamı = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
    let naberfıstık = aylartoplamı;
  let s = `${moment(client.user.createdAt).format("DD")} ${
    naberfıstık[moment(client.user.createdAt).format("MM")]
  } ${moment(client.user.createdAt).format("YYYY HH:mm:ss")}`;
  
    let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = "a?";
  let yardım = await db.fetch(`yardım_${message.guild.id}`);
  if (yardım == null) yardım = "a?yardım";
  let menüyardım = await db.fetch(`menüyardım_${message.guild.id}`);
  if (menüyardım == null) menüyardım = "a?yardım a?yardım moderator a?yardım register a?yardım koruma a?yardım abone";

 const embed = new Discord.MessageEmbed()
.setColor(`#2c2f33`)
 .setImage(`https://cdn.discordapp.com/attachments/826088751104524340/826845000516108339/standard_3.gif`)
.setDescription(`
**Aktif Prefixim** \`${prefix}\`
**Yardım Komutum** \`${yardım}\`
**Yardım Menüleri** \`${menüyardım}\`


`)
.addField("__Şuanki Sunucu Sayım__",`\`\`\`${client.guilds.cache.size.toLocaleString()}\`\`\``, false)
.addField("__Şuanki Kullanıcı Sayım__",`\`\`\`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`\`\``, false)
.addField("__Komut Sayım__ ",`\`\`\`70\`\`\``)
.addField("__Kuruluş Tarihim__",`\`\`\`${s}\`\`\``)
message.channel.send(embed)
 .then(msg => msg.delete({ timeout: 90000 }))
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["test"],
  permLevel: 0
};

exports.help = {
  name: "test",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};