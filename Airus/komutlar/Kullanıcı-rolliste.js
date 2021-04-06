const Discord = require('discord.js')
const client = new Discord.Client()

exports.run = async (client, msg, args) => {
try {

} catch (err) {
        msg.channel.send(`Sunucunuzda __Fazla Rol__ Bulunmaktadır veya Rollerin İsimleri __Çok Uzun__!`)
    }
 try {
            const embed = new Discord.MessageEmbed()
            .setColor(`#2c2f33`)
            .setFooter(`Sorgulayan: ${msg.author.tag}`,`${msg.author.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
            .setTitle(`Sunucuda Bulunan Roller`)
            .setDescription(`${msg.guild.roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' ** ** ') ? msg.guild.roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' **・** ') : '**Bulunduğunuz Sunucuda Hiç __Rol__ Barınmamaktadır !**'}`)
            return msg.channel.send(embed)
  
    } catch (err) {
        msg.channel.send(`Sunucunuzda __Fazla Rol__ Bulunmaktadır veya Rollerin İsimleri __Çok Uzun__!`)
    }
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rol-listesi'],
  permLevel: 0
};
exports.help = {
  name: 'roller',
  description: '',
  usage: 'roller'
};