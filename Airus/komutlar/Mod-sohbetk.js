const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {

let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = "a?";

  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#2c2f33")
        .setDescription(
          `• \`${prefix}sohbet-kapat\`Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`
)
    );

  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
  message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });

  message.channel.send(
new Discord.MessageEmbed()
.setColor('#2c2f33')
.setDescription(
`> Sohbet kanalı \`Yazılamaz\` durumuna getirildi.`));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sohbet-kapat"],
  permLevel: 0
};

exports.help = {
  name: "sohbet-kapat",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "kapat"
};