const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(
          new Discord.MessageEmbed()
        .setColor("#2c2f33")
        .setDescription(
          `• \`${prefix}prefix-sıfırla\`Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`
        )
        
    );
   let prefix = await db.fetch(`prefix_${message.guild.id}`) || ".";
{

        if (!prefix) {
          const embed = new Discord.MessageEmbed()
            .setColor("#2c2f33")
            .setDescription(`**Prefix Ayarlanmadı**`)
            .setFooter(client.user.username, client.user.avatarURL());

          message.channel.send(embed);
          return;
        }
        const embed = new Discord.MessageEmbed()
          .setColor("#2c2f33")
          .setDescription(`**Prefix Sıfırlandı**`)
          .setFooter(client.user.username, client.user.avatarURL());

        message.channel.send(embed);
        db.delete(`prefix_${message.guild.id}`);
      
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["prefix-reset"],
  permLevel: 0
};
exports.help = {
  name: "prefix-sıfırla",
  description: "prefix-sıfırla",
  usage: "prefix-sıfırla"
};