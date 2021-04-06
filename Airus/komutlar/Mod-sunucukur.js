const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {
if (!args[0]) {
const embed = new Discord.MessageEmbed()
.setDescription(`
**Sunucu Kur Sistemi**

***__Public Teması__***
*a?sunucukur 1*

***__Emoji Teması__***
*a?sunucukur 2*

***__Botlist Teması__***
*a?sunucukur 3*

***__Rewards Teması__***
*a?sunucukur 4*

***__Emoji2 Teması__***
*a?sunucukur 5*

`)
.setColor("#2c2f33")
message.channel.send(embed)
}
  if (!args[0] === "tema1" || args[0] === "1") {
    
    if(message.author.id !== message.guild.owner.id) return message.channel.send(' Bu komut sunucu sahiplerine özel yapılmıştır. *Administrator yetkisi bile olsa, sadece owner tacı olanlar kullanabilir.*')

await message.guild.channels.cache.forEach(a => a.delete())
await message.guild.roles.cache.forEach(a => a.delete())
  
    await message.guild.roles.create({ data: {name: "・", color: "YELLOW", permissions: ["ADMINISTRATOR"]}})
     await message.guild.roles.create({ data: {name: "・Admin", color: "#fc0000", permissions: ["MANAGE_MESSAGES","MANAGE_ROLES","MANAGE_CHANNELS","BAN_MEMBERS","KICK_MEMBERS","MANAGE_NICKNAMES","MANAGE_EMOJIS"]}})
   await message.guild.roles.create({ data: {name: "・Moderator", color: "#e1e1e1", permissions: ["MANAGE_MESSAGES"]}})
     await message.guild.roles.create({ data: {name: "・Register", color: "#07d5ff", permissions: ["MANAGE_MESSAGES"]}})
  await message.guild.roles.create({ data: {name: "・Ban Hammer", color: "#00000", permissions: ["BAN_MEMBERS","KICK_MEMBERS"]}})
   await message.guild.roles.create({ data: {name: "・Mute Hammer", color: "#00000", permissions: ["MUTE_MEMBERS","MANAGE_MESSAGES"]}})
     await message.guild.roles.create({ data: {name: "・Daisy", color: "#884da0", permissions: ["SEND_MESSAGES","ATTACH_FILES"]}})
  await message.guild.roles.create({ data: {name: "・Heaven", color: "#394379", permissions: ["SEND_MESSAGES","ATTACH_FILES"]}})
    await message.guild.roles.create({ data: {name: "・UnRegister", color: "#00000", permissions: ["SEND_MESSAGES"]}})
  
  await message.guild.channels.create('Register', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: true,
 VIEW_CHANNEL: false,
 READ_MESSAGE_HISTORY: true
})
})
await message.guild.channels.create("・register", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Register').id,})
await message.guild.channels.create("・Register", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Register').id})
await message.guild.channels.create("・Register", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Register').id})
await message.guild.channels.create("・Register", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Register').id})
await message.guild.channels.create("・Register", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Register').id})
  
await message.guild.channels.create('Önemli Kanallar', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: true,
 READ_MESSAGE_HISTORY: true
})
})
await message.guild.channels.create("・rules", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id,})
await message.guild.channels.create("・duyurular", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})
await message.guild.channels.create("・events", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})
await message.guild.channels.create("・boost", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})

                                        
  
  
await message.guild.channels.create('Genel', { type: "category" })
await message.guild.channels.create("・chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})
await message.guild.channels.create("・commands-chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})
await message.guild.channels.create("・photo-chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})

await message.guild.channels.create('Eğlence Kanalları', { type: "category" })  
  await message.guild.channels.create("・owo-chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Eğlence Kanalları').id})
   await message.guild.channels.create("・tuttu-tutmadı", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Eğlence Kanalları').id})
   await message.guild.channels.create("・kelime-oyunu", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Eğlence Kanalları').id})
  
  
await message.guild.channels.create('Sohbet Kanalları', { type: "category" })
await message.guild.channels.create("・Sound", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("・Sound", {type: "voice", parent: message.guild.channels.cache.find(a=> a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("・Sound", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})

await message.guild.channels.create('Muzik Kanalları', { type: "category" })
await message.guild.channels.create("・Music", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Muzik Kanalları').id})
await message.guild.channels.create("・Music", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Muzik Kanalları').id})
await message.guild.channels.create("・Music", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Muzik Kanalları').id})

  
  
await message.guild.channels.create('Yetkili Mekan', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: false,
 READ_MESSAGE_HISTORY: false
})
})
await message.guild.channels.create("・mod log", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Yetkili Mekan').id})
 await message.guild.channels.create("・sayaç", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Yetkili Mekan').id}) 
  await message.guild.channels.create("・otorol", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Yetkili Mekan').id})
 await message.guild.channels.cache.find(a => a.name === "・chat").send(' <@'+message.author.id+"> **Sunucu Kur Sistemi Başarıyla Aktif Edildi İyi Eğlenceler**")
      
  }
  
  if (!args[0] === "tema2" || args[0] === "2") {
  
    if(message.author.id !== message.guild.owner.id) return message.channel.send(' Bu komut sunucu sahiplerine özel yapılmıştır. *Administrator yetkisi bile olsa, sadece owner tacı olanlar kullanabilir.*')

await message.guild.channels.cache.forEach(a => a.delete())
await message.guild.roles.cache.forEach(a => a.delete())
  
    await message.guild.roles.create({ data: {name: "👑 Yönetici", color: "YELLOW", permissions: ["ADMINISTRATOR"]}})
     await message.guild.roles.create({ data: {name: "🔑 Admin", color: "#fc0000", permissions: ["MANAGE_MESSAGES","MANAGE_ROLES","MANAGE_CHANNELS","BAN_MEMBERS","KICK_MEMBERS","MANAGE_NICKNAMES","MANAGE_EMOJIS"]}})
   await message.guild.roles.create({ data: {name: "🔧 Moderator", color: "#e1e1e1", permissions: ["MANAGE_MESSAGES"]}})
  await message.guild.roles.create({ data: {name: "🔨 Ban Hammer", color: "#00000", permissions: ["BAN_MEMBERS","KICK_MEMBERS"]}})
   await message.guild.roles.create({ data: {name: "🔨 Mute Hammer", color: "#00000", permissions: ["MUTE_MEMBERS"]}})
  await message.guild.roles.create({ data: {name: "✨ Member", color: "#394379", permissions: ["SEND_MESSAGES","ATTACH_FILES"]}})
  
await message.guild.channels.create('Önemli Kanallar', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: true,
 READ_MESSAGE_HISTORY: true
})
})
await message.guild.channels.create("「📊」Kurallar", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id,})
await message.guild.channels.create("「📣」Duyurular", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})
await message.guild.channels.create("「🎉」Çekiliş", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})
await message.guild.channels.create("「💝」Boost", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})

                                        
  
  
await message.guild.channels.create('Genel', { type: "category" })
await message.guild.channels.create("「💬」Chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})
await message.guild.channels.create("「🛠️」Komut", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})
await message.guild.channels.create("「📷」Medya", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})

await message.guild.channels.create('Eğlence Kanalları', { type: "category" })  
  await message.guild.channels.create("「💣」bom", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Eğlence Kanalları').id})
   await message.guild.channels.create("「🔢」sayı-sayma", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Eğlence Kanalları').id})
   await message.guild.channels.create("「💡」kelime türetme", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Eğlence Kanalları').id})
  
  
await message.guild.channels.create('Sohbet Kanalları', { type: "category" })
await message.guild.channels.create("「💬」Sohbet | 1", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("「💬」Sohbet | 2", {type: "voice", parent: message.guild.channels.cache.find(a=> a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("「💬」Sohbet | 3", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})

await message.guild.channels.create('Muzik Kanalları', { type: "category" })
await message.guild.channels.create("「🎵」Music | 1", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Muzik Kanalları').id})
await message.guild.channels.create("「🎵」Music | 2", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Muzik Kanalları').id})
await message.guild.channels.create("「🎵」Music | 3", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Muzik Kanalları').id})

  
  
await message.guild.channels.create('Yetkili Mekan', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: false,
 READ_MESSAGE_HISTORY: false
})
})
await message.guild.channels.create("「🔒」Yetkili chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Yetkili Mekan').id})
 await message.guild.channels.create("「🔒」Yetkili komut", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Yetkili Mekan').id}) 
  await message.guild.channels.create("「🎤」Yetkili Özel", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Yetkili Mekan').id})
  await message.guild.channels.cache.find(a => a.name === "「💬」Chat").send(' <@'+message.author.id+"> **Sunucu Kur Sistemi Başarıyla Aktif Edildi İyi Eğlenceler**")
    
  }
  
    if (!args[0] === "tema3" || args[0] === "3") {
  
    if(message.author.id !== message.guild.owner.id) return message.channel.send(' Bu komut sunucu sahiplerine özel yapılmıştır. *Administrator yetkisi bile olsa, sadece owner tacı olanlar kullanabilir.*')

await message.guild.channels.cache.forEach(a => a.delete())
await message.guild.roles.cache.forEach(a => a.delete())
  
    await message.guild.roles.create({ data: {name: "Owner", color: "YELLOW", permissions: ["ADMINISTRATOR"]}})
     await message.guild.roles.create({ data: {name: "Admin", color: "#fc0000", permissions: ["SEND_MESSAGES","MANAGE_MESSAGES","MANAGE_ROLES","MANAGE_CHANNELS","BAN_MEMBERS","KICK_MEMBERS","MANAGE_NICKNAMES","MANAGE_EMOJIS"]}})
   await message.guild.roles.create({ data: {name: "Moderator", color: "#e1e1e1", permissions: ["SEND_MESSAGES","MANAGE_MESSAGES"]}})
  await message.guild.roles.create({ data: {name: "Bot List Authorized", color: "#77ff7c", permissions: ["SEND_MESSAGES","ATTACH_FILES","MANAGE_MESSAGES"]}})
   await message.guild.roles.create({ data: {name: "VİP", color: "#00000", permissions: ["SEND_MESSAGES","ATTACH_FILES"]}})
  await message.guild.roles.create({ data: {name: "Sertifikalı Developer", color: "#1e1279", permissions: ["SEND_MESSAGES","ATTACH_FILES"]}})
await message.guild.roles.create({ data: {name: "Developer", color: "#0022ff", permissions: ["SEND_MESSAGES","ATTACH_FILES"]}})
      await message.guild.roles.create({ data: {name: "Member", color: "#00e9ff", permissions: ["SEND_MESSAGES","ATTACH_FILES"]}})
      await message.guild.roles.create({ data: {name: "Sunucu Bot", color: "#00000", permissions: ["SEND_MESSAGES"]}})
            await message.guild.roles.create({ data: {name: "Sertifikalı Bot", color: "#00000", permissions: []}})
            await message.guild.roles.create({ data: {name: "Bot", color: "#00000", permissions: []}})
  
await message.guild.channels.create('Önemli Kanallar', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: true,
 READ_MESSAGE_HISTORY: true
})
})
await message.guild.channels.create("kurallar", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id,})
await message.guild.channels.create("announcements", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})
await message.guild.channels.create("updates", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})
await message.guild.channels.create("sponsor", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})
      await message.guild.channels.create("giveaway", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})
await message.guild.channels.create("booster", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})
      
                                        
  
  
await message.guild.channels.create('Genel', { type: "category" })
await message.guild.channels.create("chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})
await message.guild.channels.create("photo-chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})
await message.guild.channels.create("commands-chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})
      await message.guild.channels.create("owo-chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})
await message.guild.channels.create("Sound | 1", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})
await message.guild.channels.create("Sound | 2", {type: "voice", parent: message.guild.channels.cache.find(a=> a.name === 'Genel').id})
await message.guild.channels.create("Sound | 3", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})
  
  await message.guild.channels.create('Bot Test', { type: "category" })  
  await message.guild.channels.create("botrules", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Bot Test').id})
   await message.guild.channels.create("botadd", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Bot Test').id})
   await message.guild.channels.create("botlog", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Bot Test').id})
  await message.guild.channels.create("bottest", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Bot Test').id})
       await message.guild.channels.create("Bot Test", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Bot Test').id})
  
      
await message.guild.channels.create('Yetkili Mekan', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: false,
 READ_MESSAGE_HISTORY: false
})
})
await message.guild.channels.create("Yetkili chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Yetkili Mekan').id})
 await message.guild.channels.create("Yetkili komut", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Yetkili Mekan').id}) 
    
      await message.guild.channels.create('LOG', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: false,
 READ_MESSAGE_HISTORY: false
})
})
await message.guild.channels.create("sayaç", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'LOG').id})
 await message.guild.channels.create("otorol", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'LOG').id}) 
      await message.guild.channels.create("modlog", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'LOG').id}) 
  await message.guild.channels.cache.find(a => a.name === "chat").send(' <@'+message.author.id+"> **Sunucu Kur Sistemi Başarıyla Aktif Edildi İyi Eğlenceler**")
      
  }
  
      if (!args[0] === "tema4" || args[0] === "4") {
  
    if(message.author.id !== message.guild.owner.id) return message.channel.send(' Bu komut sunucu sahiplerine özel yapılmıştır. *Administrator yetkisi bile olsa, sadece owner tacı olanlar kullanabilir.*')

await message.guild.channels.cache.forEach(a => a.delete())
await message.guild.roles.cache.forEach(a => a.delete())
  
    await message.guild.roles.create({ data: {name: "-", color: "#0c0a0a", permissions: ["ADMINISTRATOR"]}})
     await message.guild.roles.create({ data: {name: "Rewards God", color: "#f0ed32", permissions: ["SEND_MESSAGES","MANAGE_MESSAGES","MANAGE_ROLES","MANAGE_CHANNELS","BAN_MEMBERS","KICK_MEMBERS","MANAGE_NICKNAMES","MANAGE_EMOJIS"]}})
   await message.guild.roles.create({ data: {name: "Rewards Friends", color: "#f52e2e", permissions: ["SEND_MESSAGES","MANAGE_MESSAGES"]}})
  await message.guild.roles.create({ data: {name: "Booster", color: "#f03ce3", permissions: ["SEND_MESSAGES"]}})
   await message.guild.roles.create({ data: {name: "Bot", color: "#fca8a8", permissions: ["SEND_MESSAGES","ATTACH_FILES"]}})
  await message.guild.roles.create({ data: {name: "Sponsor", color: "#1ce488", permissions: ["SEND_MESSAGES","ATTACH_FILES"]}})
      await message.guild.roles.create({ data: {name: "Ödül Almış", color: "#1f7e37", permissions: ["SEND_MESSAGES","ATTACH_FILES"]}})
  
        await message.guild.channels.create("click-mee", {type: "text"}) 
await message.guild.channels.create('Read Me', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: true,
 READ_MESSAGE_HISTORY: true
})
})
await message.guild.channels.create("📜・read・me", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Read Me').id,})                                    

await message.guild.channels.create('INFO', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: true,
 READ_MESSAGE_HISTORY: true
})
})
await message.guild.channels.create("🌀・info", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'INFO').id,}) 
await message.guild.channels.create("🚀・boost-info", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'INFO').id,})
await message.guild.channels.create("📢・announce", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'INFO').id,})
await message.guild.channels.create("🎊・drop", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'INFO').id,})
await message.guild.channels.create("🎁・giveaway", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'INFO').id,})
await message.guild.channels.create("💸・proof", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'INFO').id,})
await message.guild.channels.create("📌・invites", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'INFO').id,})
await message.guild.channels.create("🎊・vouches", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'INFO').id,})
        
          await message.guild.channels.create('CHAT', { type: "category" })  
await message.guild.channels.create("💬・chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'CHAT').id,})
await message.guild.channels.create("💬・bot-komut", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'CHAT').id,})
        
        await message.guild.channels.create('REWARDS', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: true,
 READ_MESSAGE_HISTORY: true
})
})
await message.guild.channels.create("🎁・hediye", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'REWARDS').id,})
await message.guild.channels.create("🎁・hediye", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'REWARDS').id,})
await message.guild.channels.create("🎁・hediye", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'REWARDS').id,})
await message.guild.channels.create("🎁・hediye", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'REWARDS').id,})
await message.guild.channels.create("🎁・hediye", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'REWARDS').id,})
await message.guild.channels.create("🎁・hediye", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'REWARDS').id,})
await message.guild.channels.create("🎁・hediye", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'REWARDS').id,})
await message.guild.channels.create("🎁・hediye", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'REWARDS').id,})
await message.guild.channels.create("🎁・hediye", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'REWARDS').id,})
        
  await message.guild.channels.cache.find(a => a.name === "💬・chat").send(' <@'+message.author.id+"> **Sunucu Kur Sistemi Başarıyla Aktif Edildi İyi Eğlenceler**")
      
  }
  
  if (!args[0] === "tema5" || args[0] === "5") {
    
        if(message.author.id !== message.guild.owner.id) return message.channel.send(' Bu komut sunucu sahiplerine özel yapılmıştır. *Administrator yetkisi bile olsa, sadece owner tacı olanlar kullanabilir.*')

await message.guild.channels.cache.forEach(a => a.delete())
await message.guild.roles.cache.forEach(a => a.delete())
    
       await message.guild.roles.create({ data: {name: "👑 Yönetici", color: "YELLOW", permissions: ["ADMINISTRATOR"]}})
     await message.guild.roles.create({ data: {name: "🔑 Admin", color: "#fc0000", permissions: ["MANAGE_MESSAGES","MANAGE_ROLES","MANAGE_CHANNELS","BAN_MEMBERS","KICK_MEMBERS","MANAGE_NICKNAMES","MANAGE_EMOJIS"]}})
   await message.guild.roles.create({ data: {name: "🔧 Moderator", color: "#e1e1e1", permissions: ["MANAGE_MESSAGES"]}})
  await message.guild.roles.create({ data: {name: "🔨 Ban Hammer", color: "#00000", permissions: ["BAN_MEMBERS","KICK_MEMBERS"]}})
   await message.guild.roles.create({ data: {name: "🔨 Mute Hammer", color: "#00000", permissions: ["MUTE_MEMBERS"]}})
  await message.guild.roles.create({ data: {name: "✨ Member", color: "#394379", permissions: ["SEND_MESSAGES","ATTACH_FILES"]}})
  
    
await message.guild.channels.create('ÖNEMLİ KANALLAR', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: true,
 READ_MESSAGE_HISTORY: true
})
})
   message.guild.channels.create(`「📜」kurallar`, {type : "text"})
    .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
   message.guild.channels.create(`「🚪」gelen-giden`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
   message.guild.channels.create(`「📣」duyuru`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
   message.guild.channels.create(`「🎥」video-duyuru`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
             message.guild.channels.create(`SOHBET KANALLARI`, { type: 'category'});
   message.guild.channels.create(`「💬」sohbet`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`「🤖」bot-komut`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`「☯」seviye-chat`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`「📷」foto-chat`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`「💎」şikayet-odasi`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
    message.guild.channels.create(`「📗」öneri-odasi`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
              message.guild.channels.create(`SES KANALLARI`, { type: 'category'});
   message.guild.channels.create(`「🔊」 Genel Sohbet`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
   message.guild.channels.create(`「🎵」 Müzik Odası 1`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
   message.guild.channels.create(`「🎵」 Müzik Odası 2`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
   message.guild.channels.create(`「🎵」 Müzik Odası 3`, {type : "voice"})
    .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
   message.guild.channels.create(`「🔇」 AFK`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
            message.guild.channels.create(`OYUN ODALARI`, { type: 'category'});
message.guild.channels.create(`🎮》LOL`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
 message.guild.channels.create(`🎮》ZULA`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
 message.guild.channels.create(`🎮》COUNTER STRİKE`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
 message.guild.channels.create(`🎮》PUBG`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
  message.guild.channels.create(`🎮》FORTNİTE`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
   message.guild.channels.create(`🎮》MİNECRAFT`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
    message.guild.channels.create(`🎮》ROBLOX`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
     message.guild.channels.create(`🎮》WOLFTEAM`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
   message.guild.channels.create(`🎮》AMONGUS 1`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
  message.guild.channels.create(`🎮》AMONGUS 2`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
  message.guild.channels.create(`🎮》AMONGUS 3`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
   message.guild.channels.create(`OYUN ODALARI`, { type: 'category'});
  message.guild.channels.create(`🎮》lol`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
   message.guild.channels.create(`🎮》zula`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
   message.guild.channels.create(`🎮》counter strike`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
 message.guild.channels.create(`🎮》pubg`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
   message.guild.channels.create(`🎮》fortnite`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
   message.guild.channels.create(`🎮》minecraft`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
   message.guild.channels.create(`🎮》roblox`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
 message.guild.channels.create(`🎮》wolfteam`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
   message.guild.channels.create(`🎮》amongus 1`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
 message.guild.channels.create(`🎮》amongus 2`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
   message.guild.channels.create(`🎮》amongus 3`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))

    await message.guild.channels.cache.find(a => a.name === "「💬」sohbet").send(' <@'+message.author.id+"> **Sunucu Kur Sistemi Başarıyla Aktif Edildi İyi Eğlenceler**")
  }
  
}

exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [], 
permLevel: 0 
};

exports.help = {
name: 'sunucukur',
description: '',
usage: ''
}