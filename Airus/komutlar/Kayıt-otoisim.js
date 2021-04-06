const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = "a?";
  
  if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor('#2c2f33')
        .setDescription(
          `• \`${prefix}oto-isim\` Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`
        )
    );
  if (!args[0])
    return message.channel.send(
      new Discord.MessageEmbed()
      .setColor("#2c2f33")
      .setTitle("Oto İsim Sistemi!")
      .setDescription(`Hatalı Kullanım! Örnek: **${prefix}oto-isim İsim | Yaş**`)
    );
  db.set(`otoisim_${message.guild.id}`, args.slice(0).join(" "));
  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#2c2f33")
      .setTitle("İşte bu kadar!")
      .setDescription("Sunucuya giren kullanıcıya adlandırmış isim verilecek.")
  );
};
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["oto-isim"],
  permlevel: 0
};
exports.help = {
  name: "oto-isim-ayarla",
  description: "oto-isim",
  usage: "oto-isim-ayarla"
};