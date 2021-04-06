const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = "a?";

  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#2c2f33")
        .setDescription(
          `• \`${prefix}sohbet-aç\`Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`
        )
    );

  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
  message.channel.createOverwrite(every, {
    SEND_MESSAGES: null
  });

  message.channel.send(
new Discord.MessageEmbed()
.setColor('#2c2f33')
.setDescription(`> Sohbet Kanalı \`Yazılabilir\` Durumuna Getirildi.`));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sohbet-aç"],
  permLevel: 0
};

exports.help = {
  name: "sohbet-aç",
  description: "Sohbetinizi açmanızı sağlar.",
  usage: "sohbet-aç"
};