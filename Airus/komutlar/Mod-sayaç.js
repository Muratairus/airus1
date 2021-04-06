const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async function(client, message, args) {
   
let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = "a?";

  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#2c2f33")
        .setDescription(
          `• \`${prefix}sayaç\`**Kullanabilmek için ,** \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`
        )
    );
    return;
  }
  if (args[0] == "sıfırla" || args[0] == "sifirla") {
    if ((await db.fetch(`sayacMiktar_${message.guild.id}`)) == null) {
      const codeuniverse = new Discord.MessageEmbed()
        .setColor("#2c2f33")
        .setTitle("Sayaç Sistemi!")
        .setDescription("**Sunucudaki Sayaç Sistemi Zaten Aktif Değil**")
        .setFooter(
          `${client.user.username} Sayaç sistemi.`,
          message.guild.iconURL({ dynamic: true })
        )
        .setTimestamp();
      message.channel.send(codeuniverse);
      return;
    } else {
      await db.delete(`sayacMiktar_${message.guild.id}`);
      await db.delete(`sayacKanal_${message.guild.id}`);
      const codeuniverse = new Discord.MessageEmbed()
        .setColor("#2c2f33")
        .setTitle("Sayaç Sistemi!")
        .setDescription("**Sunucudaki Sayaç Sistemi Başarıyla Sıfırlandı**")
        .setFooter(
          `${client.user.username} Sayaç sistemi.`,
          message.guild.iconURL({ dynamic: true })
        )
        .setTimestamp();
      message.channel.send(codeuniverse);
      return;
    }
  } else {
    if (await db.fetch(`sayacMiktar_${message.guild.id}`)) {
      const codeuniverse = new Discord.MessageEmbed()
         .setColor("#2c2f33")
        .setTitle("Sayaç Sistemi!")
        .setDescription(`**Sunucudaki Sayaç Sistemi Zaten Aktif**\n **Sıfırlamak İçin ${prefix}sayaç sıfırla**`)
        .setFooter(
          `${client.user.username} Sayaç sistemi.`,
          message.guild.iconURL({ dynamic: true })
        )
        .setTimestamp();
      message.channel.send(codeuniverse);
      return;
    }
    const kanal = message.mentions.channels.first();
    const miktar = args[1];
    if (!kanal) {
      const codeuniverse = new Discord.MessageEmbed()
          .setColor("#2c2f33")
        .setTitle("Sayaç Sistemi!")
        .setDescription(`**Bir Kanal Etiketlemelisin\n Doğru Kullanımı a?sayaç #kanal {miktar}**`)
        .setFooter(
          `${client.user.username} Sayaç sistemi.`,
          message.guild.iconURL({ dynamic: true })
        )
        .setTimestamp();
      message.channel.send(codeuniverse);
      return;
    } else if (isNaN(miktar)) {
      const codeuniverse = new Discord.MessageEmbed()
        .setColor("#2c2f33")
        .setTitle("Sayaç Sistemi!")
        .setDescription(`**Bir Rakam Girmelisin**\n**Doğru Kullanımı a?sayaç #kanal {miktar}**`)
        .setFooter(
          `${client.user.username} Sayaç sistemi.`,
          message.guild.iconURL({ dynamic: true })
        )
        .setTimestamp();
      message.channel.send(codeuniverse);
      return;
    } else if (miktar <= message.guild.members.cache.size) {
      const codeuniverse = new Discord.MessageEmbed()
        .setColor("#2c2f33")
        .setTitle("Sayaç Sistemi!")
        .setDescription("**Hedef Üye Şuanki Üyeden Fazla Olması Lazım**")
        .setFooter(
          `${client.user.username} Sayaç sistemi.`,
          message.guild.iconURL({ dynamic: true })
        )
        .setTimestamp();
      message.channel.send(codeuniverse);
      return;
    } else {
      await db.set(`sayacMiktar_${message.guild.id}`, miktar);
      await db.set(`sayacKanal_${message.guild.id}`, kanal.id);
      const codeuniverse = new Discord.MessageEmbed()
        .setColor("#2c2f33")
         .setTitle("Sayaç Sistemi!")
        .setDescription(
          `**Sunucudaki Sayaç Sistemi Başarıyla Aktif Edildi.\nSayaç Kanalı: ${kanal} \nMiktarı: ${miktar}**`
        )
        .setFooter(
          `${client.user.username} Sayaç sistemi.`,
          message.guild.iconURL({ dynamic: true })
        )
        .setTimestamp();
      message.channel.send(codeuniverse);
      return;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sayaç"],
  permLevel: 0
};

exports.help = {
  name: "sayaç",
  description: "sayaç",
  usage: "sayaç"
};