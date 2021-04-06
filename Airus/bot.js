const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
const fs = require("fs");
const ms = require('ms');
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const db = require("quick.db");
const http = require("http");
const express = require("express");
const path = require('path');
const snekfetch = require('snekfetch');
require("./util/eventLoader.js")(client);
const request = require("request");
const queue = new Map();
const app = express();

const client = new Discord.Client();

//------------------Loga Mesaj Atma------------------\\

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Tamamdır.");
  response.sendStatus(200);
});

//------------------Loga Mesaj Atma------------------\\

//----------------Projeyi Aktif Tutma----------------\\

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//----------------Projeyi Aktif Tutma----------------\\

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

//----------------Komut Algılayıcısı----------------\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  
  //----------------Komut Algılayıcısı----------------\\

  //---------------Perms Yerleştirmeleri--------------\\
  
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if ((message.author.id === ayarlar.sahip)) permlvl = 4;
  return permlvl;
};

//---------------Perms Yerleştirmeleri--------------\\

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});
client.login(ayarlar.token);
//----------------------------------Eklendim-Atıldım------------------------------------//
const webhook = new Discord.WebhookClient('826923938159394846','NM3fu_FbHaSiquKzcZKo-Zr8F6yq5JvtVCbFZ0CBaskAjf7Y8uKHyAD5tRMi1rRl_rdv');

client.on('guildCreate', async (guild, args) => {
  
let WCS = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle(`${guild.name} Adlı Sunucusuna Eklendim!`)
.setDescription(`
**__Sunucu Bilgileri__**
Sunucu Adı : \`${guild.name}\`
Sunucu ID : \`${guild.id}\`
Sunucu Bölgesi : **${guild.region}**
Sunucu Üye Sayısı : \`${guild.memberCount}\`
**__Sunucu Sahip Bilgileri__**
Adı : ${client.users.cache.get(guild.ownerID).tag} | IDI : ${guild.owner.id}
`)

webhook.send(WCS);
});

client.on('guildDelete', guild => {
  
let WCS = new Discord.MessageEmbed()
.setColor("RED")
.setTitle(`${guild.name} Adlı Sunucudan Atıldım!`)
.setDescription(`
**__Sunucu Bilgileri__**
Sunucu Adı : \`${guild.name}\`
Sunucu ID : \`${guild.id}\`
Sunucu Bölgesi : **${guild.region}**
Sunucu Üye Sayısı : \`${guild.memberCount}\`
**__Sunucu Sahip Bilgileri__**
Adı : ${client.users.cache.get(guild.ownerID).tag} | IDI : ${guild.owner.id}
`)

webhook.send(WCS);

});
//---------------------------------------Oto-Rol----------------------------------------//
client.on("guildMemberAdd", async member => {

  let kanal = await db.fetch(`otorolkanal_${member.guild.id}`);
  let rol = await db.fetch(`otorolrol_${member.guild.id}`);

  if (!kanal) return;
  if (!rol) return;

  let user = client.users.cache.get(member.id);

  client.channels.cache.get(kanal).send(
  new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle(`${client.user.username} | **Oto Rol Sistemi**`)
  .setTimestamp()
  .setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
  .setDescription(`Sunucuya Hoşgeldin **${member}** (${member.user.tag})`))
  
  member.roles.add(rol)
});
//---------------------------------------Oto-Rol----------------------------------------//

//----------------------------------------Sa-As-----------------------------------------//
client.on("message", async message => {
  const walaska = message.content.toLocaleLowerCase();

  if (
    walaska  === "selam" ||
    walaska  === "sa" ||
    walaska  === "Sa" ||
    walaska  === "selamün aleyküm" ||
    walaska  === "selamun aleyküm" ||
    walaska  === "slm" ||
    walaska  === "sea"
  ) {
    if (db.fetch(`sa-as_${message.guild.id}`)) {
      message.reply(
        new Discord.MessageEmbed()

          .setDescription(
            `${message.author} Aleyküm Selam, Hoş Geldin Dostum ^-^`
          )
          .setColor("RANDOM")
      );
    }
  }
});
//----------------------------------------Sa-As-----------------------------------------//

//----------------------------------------Sayaç-----------------------------------------//
client.on("guildMemberAdd", async member => {
  const miktar = await db.fetch(`sayacMiktar_${member.guild.id}`);
  const kanalID = await db.fetch(`sayacKanal_${member.guild.id}`);
  if (!miktar || miktar == null) return;
  if (!kanalID || kanalID == null) return;
  const kanal = member.guild.channels.cache.get(kanalID);
  const guildMemberSize = member.guild.members.cache.size;
  if (guildMemberSize >= miktar) {
    await db.delete(`sayacMiktar_${member.guild.id}`);
    await db.delete(`sayacKanal_${member.guild.id}`);
    kanal.send(`<a:yeah_giveaway:802214014456823838> <@${member.user.id}> Adlı Kullanıcı Sunucuya Katıldı! **${miktar}** Üyeyi Geçilmiştir!`);
  } else {
    kanal.send(`<a:login:802203135497732137> <@${member.user.id}> Adlı Kullanıcı Sunucuya Katıldı! **${miktar}** Kişi Olmamıza ** ${miktar - guildMemberSize} ** Kişi Kaldı ** ${guildMemberSize} ** Kişiyiz!`);
  }
});
client.on("guildMemberRemove", async member => {
  const miktar = await db.fetch(`sayacMiktar_${member.guild.id}`);
  const kanalID = await db.fetch(`sayacKanal_${member.guild.id}`);
  if (!miktar || miktar == null) return;
  if (!kanalID || kanalID == null) return;
  const kanal = member.guild.channels.cache.get(kanalID);
  const guildMemberSize = member.guild.members.cache.size;
  kanal.send(`<a:leave:802203162131431475> <@${member.user.id}> Adlı Kullanıcı Sunucuya Ayrıldı. ** ${miktar} ** Kişi Olmamıza ** ${miktar - guildMemberSize} ** Kişi Kaldı **${guildMemberSize}** Kişiyiz!`);
});
//----------------------------------------Sayaç-----------------------------------------//

//------------------------------------Küfür-Engel---------------------------------------//
client.on("message", async message => {
  let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
  let reklamkick = await db.fetch(`kufur_${message.guild.id}`);
  let kullanici = message.member;
  if (!reklamkick) return;
  if (reklamkick == "Açık") {
    const küfür = [
      "amk",
      "sikiyim",
      "ananıskm",
      "piç",
      "porn",
      "pornhub",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "amcık",
      "amık",
      "yarram",
      "sikimi",
      "mk",
      "mq",
      "aq",
      "amq",
      "ananı",
      "sikişim",
      "sg",
      "oç",
      "taşak",
      "porno",
      "a.m.k",
      "sokarim",
      "gotune"
    ];
    if (küfür.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
        db.add(`reklamuyari_${message.author.id}`, 1); 
        if (uyarisayisi === null) {
          let uyari = new Discord.MessageEmbed()
            .setColor("BLACK") 
            .setTitle("Λirus | Küfür-Engel Sistemi")
            .setDescription(
              `<@${message.author.id}> Küfür Etmeyi Kesermisin! Bu İlk Uyarın! (1/5)`
            )
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
          message.channel
            .send(uyari)
            .then(msg => msg.delete({ timeout: 3000 }));
        }
        if (uyarisayisi === 1) {
          let uyari = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle("Λirus | Küfür-Engel Sistemi")
            .setDescription(
              `<@${message.author.id}> Küfür Etmeği Kesermisin! Bu İkinci Uyarın! (2/5)`
            )
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
          message.channel
            .send(uyari)
            .then(msg => msg.delete({ timeout: 3000 }));
        }

        if (uyarisayisi === 2) {
          let uyari = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle("Λirus | Küfür-Engel Sistemi")
            .setDescription(
              `<@${message.author.id}> Küfür Etmeği Kesermisin! Bu Üçüncü Uyarın! (3/5)`
            )
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
          message.channel
            .send(uyari)
            .then(msg => msg.delete({ timeout: 3000 }));
        }

        if (uyarisayisi === 3) {
          let uyari = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle("Λirus | Küfür-Engel Sistemi")
            .setDescription(
              `<@${message.author.id}> Küfür Etmeği Kesermisin! Bu Dürdüncü Uyarın! (4/5)`
            )
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
          message.channel
            .send(uyari)
            .then(msg => msg.delete({ timeout: 3000 }));
        }

        if (uyarisayisi === 4) {
          message.delete();
          await kullanici.kick({
            reason: `Küfür-Engel Sistemi!`
          });
          let uyari = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle("Λirus | Küfür-Engel Sistemi")
            .setDescription(
              `<@${message.author.id}> Küfür Ettiği İçin Sunucudan Atıldı! (5/5)`
            )
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
          message.channel
            .send(uyari)
            .then(msg => msg.delete({ timeout: 3000 }));
        }
        if (uyarisayisi === 5) {
          message.delete();
          await kullanici.ban({
            reason: `Λirus Küfür-Engel Sistemi!`
          });
          db.delete(`reklamuyari_${message.author.id}`);
          let uyari = new Discord.MessageEmbed() 
            .setColor("BLACK")
            .setTitle("Λirus | Küfür Kick Sistemi")
            .setDescription(
              `<@${message.author.id}> Atıldıktan Sonra Tekrar Küfür Ettiği İçin Sunucudan Yasaklandı!`
            )
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
          message.channel
            .send(uyari)
            .then(msg => msg.delete({ timeout: 5000 }));
        }
      }
    }
  }
});
//------------------------------------Küfür-Engel---------------------------------------//
//-------REKLAM-ENGEL------------------------
client.on("message", async msg => {
  
  
 if(!db.has(`reklam_${msg.guild.id}`)) return;
        const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",".cf",".tk",".fl"];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply('**Bu Sunucuda** `Reklam Engelle`** Aktif Reklam Yapmana İzin Vermem ? !**').then(msg => msg.delete(3000));
            
 
  msg.delete(3000);    
              
 
            }              
          } catch(err) {
            console.log(err);
          }
        }
  
    });

//--------REKLAM-ENGEL-SON-----------------
//----------------------------OTO İSİM BAŞLANGIÇ----------------------------//

client.on('guildMemberAdd', async member => {
  let user = member.user;
  let guild = member.guild;
  
  const systemNameData = await db.fetch(`otoisim_${guild.id}`);
  let replacedName;
  if(systemNameData) {
  replacedName = systemNameData.replace('+kullanıcı', user.username)
  }
  member.setNickname(replacedName);
  });
  
  //----------------------------OTO İSİM BİTİŞ----------------------------//
  
  //----------------------------HOŞGELDİN MESAJ BAŞLANGIÇ---------------------------//
  
  client.on("guildMemberAdd", async member => {
    let kayıt = db.fetch(`kayıtkanal_${member.guild.id}`);
   let aylartoplam = {
          "01": "Ocak",
          "02": "Şubat",
          "03": "Mart",
          "04": "Nisan",
          "05": "Mayıs",
          "06": "Haziran",
          "07": "Temmuz",
          "08": "Ağustos",
          "09": "Eylül",
          "10": "Ekim",
          "11": "Kasım",
          "12": "Aralık"
    }
   let aylar = aylartoplam 
  let user = client.users.cache.get(member.id);
  require("moment-duration-format");
  let kayıtçı = db.fetch(`kayıtçırol_${member.guild.id}`)
  
     let zoom = new Date().getTime() - member.guild.members.cache.get(user.id).user.createdAt
   let hey = moment.duration(zoom).format('Y [Yıl, ] D [Gün, ] h [Saat, ] m [Dakika, ] s [Saniye Önce]')
   
      const kurulus = new Date().getTime() - user.createdAt.getTime();
      const gün = moment.duration(kurulus).format("D")   
      var kontrol;
      if (gün < 30) kontrol = '<a:255686763524:826544404378419200> \`Güvenilmez\`'
      if (gün > 30) kontrol = '<a:34567874321:826544257233715221> \`Güvenilir\`'   
    let kanal = (kayıt)
    if(!kanal) return
    client.channels.cache.get(kanal)
    .send(`${member} <@&${kayıtçı}>`)
  client.channels.cache.get(kanal)
    .send(
  new Discord.MessageEmbed()
  .setColor('#2c2f33')
    .setImage("https://cdn.discordapp.com/attachments/826088751104524340/826521459546390528/cheering_minions.gif")
  //.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setTitle(`Yeni birisi spawn oldu!`)
  .setDescription(`
  
  <a:3456789098765432:826456047706570793> **${member} Sunucuya giriş yaptı sunucu şenlendi!**
  
  <a:Yldz:826721208707973130> **Seninle Beraber** \`${member.guild.memberCount || "DiscordAPI"}\` **Kişiyiz**
  
  <a:714509467105886390:826721207659135036> **Kayıt Olabilmen İçin <@&${kayıtçı}> Rolüne Sahip Olanlara** \`İsmini\` **Ve** \`Yaşını\` **Söylemelisin.**
  
  <a:714509467105886390:826721207659135036> **Hesabın Kurulduğu Tarih:** \`${hey}\`
  
  <a:Yldzz:826721206446587985> **Hesap Güvenilirmi:** ${kontrol}
  
  `));  
  })
  
  //----------------------------HOŞGELDİN MESAJ BİTİŞ----------------------------//
