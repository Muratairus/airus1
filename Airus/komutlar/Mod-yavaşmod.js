const db = require("quick.db");
const Discord = require("discord.js");
const request = require("request");

const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = "a?";

  if (!message.member.hasPermission("MANAGE_CHANNELS")) 
    return message.channel.send(
      new Discord.MessageEmbed()
       .setColor("#2c2f33")
        .setDescription(
          `• \`${prefix}yavaş-mod \`Kullanabilmek için , \`Kanalları Yönet\` **Yetkisine sahip olmanız gerekir**.`
        )
    );
    if (message.channel.type !== "text") return;
    const limit = args[0] ? args[0] : 0;
    if (!limit) {
      var EmbedİSTAN = new Discord.MessageEmbed()
        .setDescription(`**Kullanım ${prefix}yavaş-mod [1-480]**`)
        .setColor("#2c2f33");
      message.channel.send(EmbedİSTAN);
      return;
    }
    if (limit > 480) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            `**Süre Limiti Maksimum** __480__ **Saniye Olabilir**`
          )
          .setColor("#2c2f33")
      );
    }
    message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          `> **Yazma Süre Limiti** __${limit}__ **Saniye Olarak Ayarlanmıştır**`
        )
    .setColor("#2c2f33")
    );
    var request = require("request");
    request({
      url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
      method: "PATCH",
      json: {
        rate_limit_per_user: limit
      },
      headers: {
        Authorization: `Bot ${client.token}`
      }
    });
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yavaş-mod", "slowmode"],
  permLevel: 0
};

exports.help = {
  name: "yavaşmod",
  description: "Yavaş Mod Sistemi",
  usage: "slowmode"
};