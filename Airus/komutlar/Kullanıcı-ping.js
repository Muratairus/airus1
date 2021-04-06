const Discord = require('discord.js')//MERHABA BEN WALASKA BU KODU SANA HEDİYE EDİYORUM DAVETLERİNLE BENİ ETKİLEDİN VE BUNU HAK ETTİN
//DAVETLERİNE DEVAM EDERSEN BİR ÇOK ÖDÜL DAHA KAZANA BİLİRSİN BU KOMUT WALASKAYA AİTTİR WALASKADAN İZİNSİZ ALINMAMASI GEREKİR
//TELİF HAKKIDIR İZİNSİZ ALIMLARINDA GEREKEN CEZAYI VERECEĞİZ İYİ GÜNLER :)
const db = require("quick.db")

exports.run = async(client, message, args) => {
  
  let walaskapmesaj;
  let walaskapdurum;
  
  let walaskam;
  let walaskamdurum;
  if(Date.now() - message.createdAt < 100){

walaskam = ":red_circle:"
walaskamdurum = "#ff0000"
}
if(Date.now() - message.createdAt < 60){
walaskam = ":yellow_circle:"
walaskamdurum= "#ffff00"
}
if(Date.now() - message.createdAt < 30){
walaskam = ":green_circle: "
walaskamdurum = "#66ff00"
}
if(Date.now() - message.createdAt > 100){
walaskam = ":red_circle:"
walaskamdurum = "#ff0000"
}

if(Date.now() - message.createdAt > 60){
walaskam = ":yellow_circle:"
walaskamdurum = "#ffff00"
};
if(Date.now() - message.createdAt > 150){
walaskapmesaj = ":red_circle:"
walaskamdurum = "#ff0000"
}
if(Date.now() - message.createdAt > 250){
walaskam = ":red_circle:"
walaskamdurum = "#ff0000"
}
if(Date.now() - message.createdAt > 500){
walaskam = ":white_circle: "
walaskamdurum = "#66ff00"
}
if(Date.now() - message.createdAt > 1000){
walaskam = ":white_circle: "
walaskamdurum = "#66ff00"
}

if(client.ws.ping < 100){
walaskapmesaj = ":red_circle:"
walaskapdurum = "#ff0000"
}
if(client.ws.ping < 60){
walaskapmesaj = ":yellow_circle:"
walaskapdurum = "#ffff00"
}
if(client.ws.ping < 30){
walaskapmesaj = ":green_circle: "
walaskapdurum = "#66ff00"
}
if(client.ws.ping > 100){
walaskapmesaj = ":red_circle:"
walaskapdurum = "#ff0000"
}

if(client.ws.ping > 60){
walaskapmesaj = ":yellow_circle:"
walaskapdurum = "#ffff00"
}
if(client.ws.ping > 150){
walaskapmesaj = ":red_circle:"
walaskapdurum = "#ff0000"
}
if(client.ws.ping > 250){
walaskapmesaj = ":red_circle:"
walaskapdurum = "#ff0000"
}
if(client.ws.ping > 500){
walaskapmesaj = ":white_circle: "
walaskapdurum = "#66ff00"
}
if(client.ws.ping > 1000){
walaskapmesaj = ":white_circle: "
walaskapdurum = "#66ff00"
}
const kadir = new Discord.MessageEmbed()
.setTitle('ARİUS | Ping')
.setDescription(`Gecikme: ${client.ws.ping+ "ms"} ${walaskapmesaj}\n\nMesaj Gecikmesi: ${(Date.now() - message.createdAt)+ "ms"} ${walaskam}`)
.setImage('https://api.alexflipnote.dev/supreme?text='+ client.ws.ping +'%20Ping')
.setColor(walaskapdurum)
.setFooter(`${message.author.username} komutu kullandı.`)
message.channel.send(kadir)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botping','bot-ping'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
};