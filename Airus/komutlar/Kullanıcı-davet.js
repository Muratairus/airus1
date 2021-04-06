const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = "a?";
  
  const yardım = new Discord.MessageEmbed()
    .setTimestamp()
    .setFooter(`Beni davet et a?davet || © Λirus BOT v2 `)
    .setColor("#2c2f33")
    .setDescription(`
<a:eqwtreter:822783674814693376> **Λirus BOT v2** <a:eqwtreter:822783674814693376>
    
**Bu Sunucudaki Prefixim:** \`${prefix}\`

**Λirus BOT v2** [\`Sunucuna Davet Et\`](https://discord.com/oauth2/authorize?client_id=800057438731632640&scope=bot&permissions=8)
**Λirus BOT v2** [\`Destek Sunucusu\`](https://discord.gg/deTsfXDYym)
**Λirus BOT v2** [\`Web Sistemiz\`](https://airus-site.glitch.me)

Öneriniz Varsa a?öneri <öneriniz>
Komut Hatası Yazı Hatası Bulduysanız a?hata-bildir <hatanız>

    `)

  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet", "invite","inv"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};
