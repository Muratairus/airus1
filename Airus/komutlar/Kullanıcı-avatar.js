const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let kişicikabi = message.mentions.users.first() || message.author
 let avatarcım = new Discord.MessageEmbed()
  
  .setImage(kişicikabi.avatarURL())
  
  message.channel.send(avatarcım)
  
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["a"],
  permLevel: 0
};

exports.help = {
  name: "avatar",
  description: "",
  usage: ""
};