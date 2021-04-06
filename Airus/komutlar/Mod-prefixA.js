const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || "a?";
{
  let prefix = args.slice(0).join(" ");
  
    if (!message.member.hasPermission("ADMINISTRATOR")) { 
    return message.channel.send(
        new Discord.MessageEmbed()
        .setColor("#2c2f33")
        .setDescription(
            ` • \`${prefix}prefix-ayarla\`**Kullanabilmek için , **\`Yönetici\` **Yetkisine sahip olmanız gerekir**.`
          )
    );
          return;
      }
    
        if (!prefix) {
          const valiant = new Discord.MessageEmbed()
            .setColor("#2c2f33")
            .setDescription(`**__Prefix Giriniz__**`)
            .setFooter(client.user.username, client.user.avatarURL());
          message.channel.send(valiant);
          return;
        }
        const valiant = new Discord.MessageEmbed()
          .setColor("#2c2f33")
          .setDescription(`__Prefix__: \`${prefix}\` Olarak Ayarlandı`)
          .setFooter(client.user.username, client.user.avatarURL());
        message.channel.send(valiant);
        db.set(`prefix_${message.guild.id}`, prefix);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["prefix-ayarla"],
  permLevel: 0

};
exports.help = {
  name: "prefix-ayarla",
  description: "prefix",
  usage: "prefix"
};