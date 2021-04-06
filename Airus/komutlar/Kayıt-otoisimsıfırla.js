const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = "!";
  

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.MessageEmbed()
      .setColor("#2c2f33")
      .setDescription(
       
        `• \`${prefix}oto-isim sıfırla\` Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`
      );

    message.channel.send(embed);
    return;
  }
const sistem = await db.fetch(`otoisim_${message.guild.id}`);
if(!sistem) return message.channel.send(
  new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**Oto İsim Sistemi Aktif Olmadığı __Kapatılamadı__**`));
db.delete(`otoisim.${message.guild.id}`);
const embedi =  new Discord.MessageEmbed()
  .setColor("#2c2f33")
  .setDescription(`**Oto İsim Sistemi Başarıyla __Kapatıldı__**`);
  return message.channel.send(embedi);
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oto-isim-sıfırla"],
  permLevel: 0
};

exports.help = {
  name: "oto-isim-sıfırla",
  description: "",
  usage: "oto-isim-sıfırla"
};