const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = "a?";
  
  const yardım = new Discord.MessageEmbed()
    .setTimestamp()
    .setFooter(`Beni davet et a?davet || © Λirus BOT v2 `)
    .setColor("#2c2f33")
    .setImage(`https://cdn.discordapp.com/attachments/826873895339950090/829004800963379207/Screenshot_1.png`)
    .setDescription(`
<a:eqwtreter:822783674814693376> **Λirus BOT v2** <a:eqwtreter:822783674814693376>

\`\`\`Sponsorum HazalHost\`\`\`

**HazalHost Bu Hıza Yetişemeyen Λirus BOT Sizide Buraya Çağırıyor !**
[\`Sende Katıl!\`](https://discord.gg/UuHpPN48zr)

**SAHİBİMİN GÖRÜŞÜ**

    `)

  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sponsor", "s"],
  permLevel: 0
};

exports.help = {
  name: "sponsor",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};
