const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require("../ayarlar.json");
const os = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
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

  const Λirus = new Discord.MessageEmbed()
    .setColor("#2c2f33")
    .setFooter(client.user.tag, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setTitle(`Λirus İstatistik`)
    .addField("<:ownership:800712635011432469> **__Sahip__**","<@756517457031593995> \`Murat.js#6388\`")
    .addField("<:developer:801774545480318976> **__Geliştirici__**","<@548000719647801357> \`ahmet.js#1321\`\n <@814575265397080084> \`Kadir#8667\`")
    .addField("<:community:800623274324656158> **Kullanıcı Sayısı**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), false)
    .addField("<:message:800474568673722379> **Sunucu Sayısı**",client.guilds.cache.size.toLocaleString(), false)
    .addField("<:channel:799749664248430602> **Kanal Sayısı**",client.channels.cache.size.toLocaleString(), false)
    .addField("<:arrow:798915916984746024> **Kütüphane**", "v" + Discord.version, false)
    .addField("<:arrow:798915916984746024> **Node.js Sürümü**", `${process.version}`, false)
    .addField("<:arrow:798915916984746024> **Botun Pingi**", client.ws.ping + " ms", false)
    .addField("<:arrow:798915916984746024> **Uptime Süresi**", duration)
    .addField("<:arrow:798915916984746024> **Kuruluş Tarihi**", s);
  return message.channel.send(Λirus).then(kadir => kadir.delete({ timeout: 1000000}));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "botbilgi"],
  permLevel: 0
};
exports.help = {
  name: "istatistik",
  description: "",
  usage: "istatistik"
};